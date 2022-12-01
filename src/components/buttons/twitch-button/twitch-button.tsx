import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './twitch-button.css?inline'
import { useLocation } from '@builder.io/qwik-city'
import queryString from 'query-string'
import { $translate as t } from 'qwik-speak'
import { Button } from '../../ui/button/button'

export const TwitchButton = component$(() => {
  useStylesScoped$(styles)
  const loc = useLocation(),
    TWITCH_CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID,
    TWITCH_URL_AUTH = import.meta.env.VITE_TWITCH_URL_AUTH,
    params = {
      redirect_uri: loc.href + 'twitch/',
      client_id: TWITCH_CLIENT_ID,
      response_type: 'token+id_token',
      scope:
        'channel%3Amanage%3Apolls+channel%3Aread%3Apolls+chat%3Aread+chat%3Aedit+openid',
    }

  return (
    <a
      class="link"
      href={`${TWITCH_URL_AUTH}?${queryString.stringify(params, {
        encode: false,
      })}`}
    >
      <Button variant="twitch">{t('app.login_twitch')}</Button>
    </a>
  )
})
