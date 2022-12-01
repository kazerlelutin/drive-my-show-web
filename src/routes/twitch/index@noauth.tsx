import { component$, useClientEffect$ } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'
import { $translate as t } from 'qwik-speak'
import { setCookie } from '~/utils/set-cookie'

export default component$(() => {
  useClientEffect$(async () => {
    const queryString = (await import('query-string')).default

    const tokens: null | { access_token?: string } = queryString.parse(
      document.location.hash.replace('#', '')
    )

    if (tokens && tokens?.access_token) {
      setCookie(tokens.access_token)
      window.location.pathname = '/dashboard'
    }
  })

  return (
    <div>
      <h1>{t('app.twitch_wait')}</h1>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Validate',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
