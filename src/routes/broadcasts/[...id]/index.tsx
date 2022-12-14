import { component$ } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => <p>La page</p>)

export const head: DocumentHead = {
  title: 'Broadcast',
}
