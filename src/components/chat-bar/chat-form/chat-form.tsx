import {
  component$,
  useStore,
  useStylesScoped$,
  $,
  useContext,
} from '@builder.io/qwik'
import styles from './chat-form.css?inline'
import tmi from 'tmi.js'
import { Button } from '~/components/ui/button/button'
import { sessionContext } from '~/components/session/session.context'
import { channelContext } from '~/components/contexts/channel.context'
import { $translate as t } from 'qwik-speak'

export const ChatForm = component$(() => {
  useStylesScoped$(styles)
  const { session } = useContext(sessionContext)
  const { channel } = useContext(channelContext)
  const state = useStore({ value: '' })

  const handleSubmit = $(async () => {
    const client = new tmi.Client({
      options: { debug: false },
      identity: {
        username: session.login,
        password: `oauth:${session.token}`,
      },
      channels: [channel],
    })
    await client.connect()
    await client.say('kazerll', state.value)
    client.disconnect()

    state.value = ''
  })

  return (
    <div className="send">
      <input
        value={state.value}
        onInput$={$(async (event: KeyboardEvent) => {
          const input = event.target as HTMLInputElement
          state.value = input.value
        })}
      />
      <Button variant="normal" onClick$={handleSubmit}>
        {t('send')}
      </Button>
    </div>
  )
})
