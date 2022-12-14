import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Breadcrumb } from '~/components/breadcrumb/breadcrumb'
import { CurrentChannel } from '~/components/channel/current-channel/current-channel'
import { FullscreenModalProvider } from '~/components/fullscreen-modal/fullscreen-modal.context'
import { MyAvatar } from '~/components/user/my-avatar/my-avatar'
import { Card } from '../card/card'
import { DmsLogo } from '../dms-logo/dms-logo'
import styles from './header.css?inline'

export const Header = component$(() => {
  useStylesScoped$(styles)
  return (
    <div class="container">
      <Card>
        <header>
          <DmsLogo />
          <Breadcrumb />
          <ul class="links">
            <li>
              <FullscreenModalProvider>
                <CurrentChannel />
              </FullscreenModalProvider>
            </li>
            <li>
              <MyAvatar />
            </li>
          </ul>
        </header>
      </Card>
    </div>
  )
})
