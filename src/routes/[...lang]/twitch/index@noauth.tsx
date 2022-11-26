import { component$, useClientEffect$ } from '@builder.io/qwik'
import { DocumentHead, useNavigate } from '@builder.io/qwik-city'
import { setCookie } from '~/utils/set-cookie'
import { $translate as t } from 'qwik-speak'

export default component$(() => {
  const nav = useNavigate()

  useClientEffect$(async () => {
    const queryString = (await import('query-string')).default

    const tokens: null | { access_token?: string } = queryString.parse(
      document.location.hash.replace('#', '')
    )

    if (tokens && tokens?.access_token) {
      setCookie(tokens.access_token)
      nav.path = '/dashboard'
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
