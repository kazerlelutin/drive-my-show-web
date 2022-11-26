import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { TwitchButton } from '../../buttons/twitch-button/twitch-button'
import { Card } from '../card/card'
import { DmsLogo } from '../dms-logo/dms-logo'
import styles from './header-no-auth.css?inline'

export const HeaderNoAuth = component$(() => {
  useStylesScoped$(styles)

  return (
    <div class="container">
      <Card>
        <header>
          <DmsLogo />
          <ul>
            <li>
              <TwitchButton />
            </li>
          </ul>
        </header>
      </Card>
    </div>
  )
})
