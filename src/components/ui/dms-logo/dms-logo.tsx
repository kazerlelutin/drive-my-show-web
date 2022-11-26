import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './dms-logo.css?inline'

export const DmsLogo = component$(() => {
  useStylesScoped$(styles)

  return (
    <div class="logo">
      <a href="/">Drive My show</a>
    </div>
  )
})
