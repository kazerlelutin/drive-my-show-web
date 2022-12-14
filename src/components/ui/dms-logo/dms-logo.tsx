import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import styles from './dms-logo.css?inline'

export const DmsLogo = component$(() => {
  useStylesScoped$(styles)

  return (
    <div class="logo">
      <Link href="/">
        <div  class="logoLink">
          Drive My show
        </div>
      </Link>
    </div>
  )
})
