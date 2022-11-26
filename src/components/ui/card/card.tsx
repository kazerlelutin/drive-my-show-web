import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import styles from './card.css?inline'

interface CardProps {
  type?: 'classic' | 'highlight' | 'warning' | 'info'
  title?: string
}

export const Card = component$(({ type = 'classic', title }: CardProps) => {
  useStylesScoped$(styles)

  return (
    <div class="card" data-type={type}>
      {title && <div class="title">{title}</div>}
      <div className="main">
        <Slot />
      </div>
    </div>
  )
})
