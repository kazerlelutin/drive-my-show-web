import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import styles from './breadcrumb.css?inline'
import { Flex } from '../ui/flex/flex'
import { $translate as t } from 'qwik-speak'

export const Breadcrumb = component$(() => {
  useStylesScoped$(styles)
  const loc = useLocation()
  const routes = loc.pathname.split('/')

  return (
    <Flex smallGap>
      {!loc.pathname.match(/dashboard/) && (
        <div class="breadcrumb" data-current="false">
          <Link href="/dashboard">
            <div class="route">dashboard</div>
          </Link>
        </div>
      )}
      {routes
        .filter((route) => route !== '')
        .map((route) => (
          <div
            class="breadcrumb"
            data-current={`${loc.pathname.includes(route)}`}
          >
            <Link href={`/${route}`}>
              <div class="route">{t(route)}</div>
            </Link>
          </div>
        ))}
    </Flex>
  )
})
