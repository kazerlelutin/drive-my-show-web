import { component$, useStyles$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import globalStyles from './styles/global.css?inline'
import { QwikSpeak } from 'qwik-speak'
import { config, translateFn } from './utils/speak-config'
import { RouterHead } from './components/router-head/router-head'

export default component$(() => {
  useStyles$(globalStyles)

  return (
    <QwikSpeak config={config} translateFn={translateFn}>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
        </head>
        <body lang="en">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </QwikCityProvider>
    </QwikSpeak>
  )
})
