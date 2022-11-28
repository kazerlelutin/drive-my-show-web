import { component$, PropFunction, useStylesScoped$ } from '@builder.io/qwik'
import styles from './chip.css?inline'

interface ChipProps {
  type?: 'classic' | 'highlight' | 'warning' | 'info'
  text: string
  onClick$?: PropFunction<() => void>
}

export const Chip = component$(
  ({ type = 'classic', text, onClick$ }: ChipProps) => {
    useStylesScoped$(styles)

    const attrClick = {
      onClick$: onClick$ ? onClick$ : undefined,
    }

    return (
      <div
        class="chip"
        data-type={type}
        {...attrClick}
        data-cursor={`${!!onClick$}`}
      >
        {text}
      </div>
    )
  }
)
