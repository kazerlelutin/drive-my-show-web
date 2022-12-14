import { component$, useStylesScoped$, Slot } from '@builder.io/qwik'
import styles from './actions-bar.css?inline'

export const ActionsBar = component$(() => {
  useStylesScoped$(styles)

  return (
    <div class="root">
      <Slot />
    </div>
  )
})
