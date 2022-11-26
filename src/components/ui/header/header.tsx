import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { CurrentChannel } from '~/components/current-channel/current-channel'
import { MyAvatar } from '~/components/my-avatar/my-avatar'
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
          <ul class="links">
            <li>
              <CurrentChannel />
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
