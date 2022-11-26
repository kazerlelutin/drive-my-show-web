import { component$, Resource, Slot, useStylesScoped$ } from '@builder.io/qwik'
import styles from '../../styles/layout.css?inline'
import { RequestHandler, useEndpoint } from '@builder.io/qwik-city'
import { COOKIE_NAME } from '~/utils/set-cookie'
import { SessionProvider } from '~/components/session/session.context'
import { Header } from '~/components/ui/header/header'
import { GridBox } from '../../components/ui/grid-box/grid-box'
import { Col } from '~/components/ui/col/col'
import { Card } from '~/components/ui/card/card'
import { ChannelProvider } from '../../components/contexts/channel.context'
import { ChatBar } from '~/components/chat-bar/chat-bar'

export default component$(() => {
  useStylesScoped$(styles)
  const sessionData = useEndpoint<{ session: any }>()

  return (
    <Resource
      value={sessionData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={({ session }) => (
        <SessionProvider defaultValue={session}>
          <ChannelProvider defaultValue={session.login}>
            <div class="container">
              <Header />
              <div class="content">
                <div class="aside">
                  <GridBox>
                    <Col>
                      <Card title="Medias">mes medias</Card>
                    </Col>
                  </GridBox>
                </div>
                <main class="main">
                  <Slot />
                </main>
                <div class="chat">
                  <ChatBar />
                  <div className="sm">
                    <Card title="Messages enregistrés">
                      Les messages pré-écrits
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </ChannelProvider>
        </SessionProvider>
      )}
    />
  )
})

export const onGet: RequestHandler<{ session: any }> = async ({
  cookie,
  response,
}) => {
  const TWITCH_CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID
  // put your DB access here (hard coding data for simplicity)
  const token = cookie.get(COOKIE_NAME)?.value
  if (!token) {
    throw response.redirect('/')
  }

  const res = await fetch(`https://api.twitch.tv/helix/users`, {
    headers: {
      'Client-ID': TWITCH_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: 'Bearer ' + token,
    },
  })

  const resJson = await res.json()
  if (res.status !== 200) {
    throw response.redirect('/')
  }
  return {
    session: { ...resJson?.data[0], token },
  }
}
