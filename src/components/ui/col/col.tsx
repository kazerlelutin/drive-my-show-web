import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import styles from './col.css?inline'

interface ColProps {
  center?: boolean
  reverse?: boolean
  smallGap?: boolean
  left?: boolean
  right?: boolean
}

export const Col = component$((props: ColProps) => {
  useStylesScoped$(styles)
  return (
    <div className={`col ${Object.keys(props).join(' ')}`}>
      <Slot />
    </div>
  )
})
