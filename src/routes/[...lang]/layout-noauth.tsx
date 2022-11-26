import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import { HeaderNoAuth } from '~/components/ui/header-no-auth/header-no-auth'
import styles from '../../styles/public-layout.css?inline'

export default component$(() => {
  useStylesScoped$(styles)
  return (
    <div class="container">
      <HeaderNoAuth />
      <div class="content">
        <main class="main">
          <Slot />
        </main>
      </div>
    </div>
  )
})
