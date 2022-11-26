import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './chat-msg.css?inline'

type ChatMsgProps = {
  color?: string
  username: string
  message: string
}
export const ChatMsg = component$((props: ChatMsgProps) => {
  useStylesScoped$(styles)
  return (
    <div>
      <span class="username" style={{ color: props.color }}>
        {props.username}
        {': '}
      </span>
      <span dangerouslySetInnerHTML={props.message} />
    </div>
  )
})
