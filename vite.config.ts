import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { qwikSpeakInline } from 'qwik-speak/inline'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikSpeakInline({
        basePath: './',
        assetsPath: 'public/i18n',
        supportedLangs: ['en-US', 'fr-FR'],
        defaultLang: 'fr-FR',
      }),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  }
})
