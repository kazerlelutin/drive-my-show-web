import {
  component$,
  PropFunction,
  Slot,
  useStylesScoped$,
} from '@builder.io/qwik'
import styles from './button.css?inline'

type ButtonProps = {
  onClick$?: PropFunction<() => void>
  variant?: 'normal' | 'twitch'
}
export const Button = component$((props: ButtonProps) => {
  useStylesScoped$(styles)
  return (
    <button
      class="button"
      onClick$={props.onClick$}
      data-variant={props.variant}
    >
      <Slot />
    </button>
  )
})
