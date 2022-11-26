import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { GridBox } from '../ui/grid-box/grid-box'
import styles from './chat-bar.css?inline'
import { ChatForm } from './chat-form/chat-form'
import { Chat } from './chat/chat'

export const ChatBar = component$(() => {
  useStylesScoped$(styles)

  return (
    <div class="container">
      <GridBox>
        <Chat />
      </GridBox>
      <ChatForm />
    </div>
  )
})
