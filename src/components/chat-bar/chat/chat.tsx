import {
  component$,
  useStore,
  useStylesScoped$,
  useClientEffect$,
  useContext,
  useSignal,
} from '@builder.io/qwik'
import styles from './chat.css?inline'
import tmi from 'tmi.js'
import { channelContext } from '~/components/contexts/channel.context'
import { ChatMsg } from '~/components/ui/chat/chat-msg/chat-msg'
import { sessionContext } from '~/components/session/session.context'

export type ChatMessage = {
  tags?: tmi.ChatUserstate
  message: string
  username: string
  color: string
}

export const Chat = component$(() => {
  useStylesScoped$(styles)
  const { session } = useContext(sessionContext)
  const chan = useContext(channelContext)
  const outputRef = useSignal<Element>()
  const state = useStore<{
    messages: ChatMessage[]
  }>({
    messages: [],
  })

  useClientEffect$(async ({ track }) => {
    track(chan)
    const client = new tmi.Client({
      options: { debug: false },
      identity: {
        username: session.login,
        password: `oauth:${session.token}`,
      },
      channels: [chan.channel],
    })
    client.connect()

    client.on('message', (_channel, tags, message) => {
      let newMsg = message
      const emotes = tags.emotes ? Object.keys(tags.emotes) : []

      emotes.forEach((o) => {
        if (!tags?.emotes) return
        tags.emotes[o].forEach((position: string) => {
          const splitPosition = position.split('-')
          const emoteWord = message.slice(
            parseInt(splitPosition[0]),
            parseInt(splitPosition[1]) + 1
          )
          newMsg = newMsg.replace(emoteWord, ` ${o} `)
        })
      })

      const splitMsg = newMsg.split(' ')

      const oldMessages = state.messages.slice(0, 100)
      oldMessages.push({
        username: tags['display-name'] || tags.username || '',
        color: tags.color || 'var(--dms-text)',
        message: splitMsg
          .map((word) => {
            if (word.match(/http|www/)) {
              return '**link**'
            }

            const isEmote = emotes.find((o) => o === word)
            if (isEmote) {
              return `<img class="emoticon" src="http://static-cdn.jtvnw.net/emoticons/v1/${isEmote}/3.0" />`
            }
            return word
          })
          .join(' '),
      })

      state.messages = oldMessages
    })

    return () => {
      client.disconnect()
    }
  })

  useClientEffect$(({ track }) => {
    track(state)
    if (outputRef?.value)
      outputRef.value.scrollIntoView({ behavior: 'smooth', block: 'end' })
  })

  return (
    <div class="messages" ref={outputRef}>
      {state.messages.map((msg) => (
        <ChatMsg {...msg} />
      ))}
    </div>
  )
})
