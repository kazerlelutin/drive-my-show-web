import {
  $,
  component$,
  useContext,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik'
import styles from './channel-form.css?inline'
import { Col } from '~/components/ui/col/col'
import { Button } from '~/components/ui/button/button'
import { sessionContext } from '~/components/session/session.context'
import { channelContext } from '../../contexts/channel.context'
import { $translate as t } from 'qwik-speak'

export const ChannelForm = component$(() => {
  useStylesScoped$(styles)
  const { session } = useContext(sessionContext)
  const channelStore = useContext(channelContext)
  const store = useStore({ value: '', loading: false })

  const handleSubmit = $(async () => {
    if (store.loading) return
    store.loading = true
    const res = await fetch(`${import.meta.env.VITE_URL_API}/channel/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session.token_api,
      },
      body: JSON.stringify({ name: store.value }),
    })
    const data = await res.json()
    channelStore.count = data.count
    store.value = ''
    store.loading = false
  })

  const text = t(store.loading ? 'app.loading' : 'app.send')

  return (
    <form onSubmit$={handleSubmit} preventdefault:submit class="form">
      <Col smallGap>
        <div class="label">Ajouter une chaine</div>
        <input
          type="text"
          value={store.value}
          placeholder={t('app.name_of_channel')}
          onInput$={$(async (event: KeyboardEvent) => {
            const input = event.target as HTMLInputElement
            store.value = input.value
          })}
        />
        <Button>{text}</Button>
      </Col>
    </form>
  )
})
