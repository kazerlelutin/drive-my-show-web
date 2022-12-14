import { component$ } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'
import { Broadcast } from '~/components/pages_related/broadcasts/broadcasts'

export default component$(() => <Broadcast />)

export const head: DocumentHead = {
  title: 'Broadcast',
}
