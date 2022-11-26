import { component$ } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'
import { Dashboard } from '~/components/pages_related/dashboard/dashboard'

export default component$(() => <Dashboard />)

export const head: DocumentHead = {
  title: 'Dashboard',
}
