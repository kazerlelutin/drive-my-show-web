import { component$, useStore, useStylesScoped$, $ } from '@builder.io/qwik'
import styles from './chat-form.css?inline'
import tmi from 'tmi.js'
import { useChatOptions } from '../chat-options.hook'
import { Button } from '~/components/ui/button/button'

export const ChatForm = component$(() => {
  useStylesScoped$(styles)
  const opts = useChatOptions()
  const state = useStore({ value: '' })

  const handleSubmit = $(async () => {
    const client = new tmi.Client(opts)
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
        envoyer
      </Button>
    </div>
  )
})
