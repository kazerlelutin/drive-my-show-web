import { component$, useStyles$ } from '@builder.io/qwik'
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'

import globalStyles from './styles/global.css?inline'
import { QwikSpeak } from 'qwik-speak'
import { config, translateFn } from './utils/speak-config'

export default component$(() => {
  useStyles$(globalStyles)

  return (
    <QwikSpeak config={config} translateFn={translateFn}>
      <QwikCity>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
        </head>
        <body lang="en">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </QwikCity>
    </QwikSpeak>
  )
})
