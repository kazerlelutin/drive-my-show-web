import { component$, useClientEffect$, $ } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'
import queryString from 'query-string'
import { setCookie } from '~/utils/set-cookie'
import { $translate as t } from 'qwik-speak'

export default component$(() => {
  //const nav = useNavigate()

  useClientEffect$(() => {
    $(() => {
      console.log('________')
      const tokens: null | { access_token?: string } = queryString.parse(
        document.location.hash.replace('#', '')
      )
      if (tokens && tokens?.access_token) {
        setCookie(tokens.access_token)

        //TODO use nav.path when qwik fix context error
        window.location.pathname = '/dashboard'
        // nav.path = '/dashboard'
      }
    })()
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
