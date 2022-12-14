import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import styles from './flex.css?inline'

interface ColProps {
  center?: boolean
  reverse?: boolean
  wrap?: boolean
  spaceBetween?: boolean
  smallGap?: boolean
}

export const Flex = component$((props: ColProps) => {
  useStylesScoped$(styles)
  return (
    <div className={`flex ${Object.keys(props).join(' ')}`}>
      <Slot />
    </div>
  )
})
