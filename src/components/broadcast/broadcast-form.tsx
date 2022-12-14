import { component$, useContext, $, useStore } from '@builder.io/qwik'
import { fullscreenModalContext } from '../fullscreen-modal/fullscreen-modal.context'
import { Button } from '../ui/button/button'
import { Col } from '../ui/col/col'
import { $translate as t } from 'qwik-speak'
import { MdEditor } from '../md-editor/md-editor'
import { sessionContext } from '../session/session.context'
import { useNavigate } from '@builder.io/qwik-city'

export const BroadcastForm = component$(() => {
  const modalState = useContext(fullscreenModalContext)
  const { session } = useContext(sessionContext)
  const nav = useNavigate()
  const store = useStore({
    name: '',
    description: '',
    loading: false,
  })

  const handleSubmit = $(async () => {
    if (store.loading) return
    store.loading = true
    const res = await fetch(`${import.meta.env.VITE_URL_API}/broadcast/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session.token_api,
      },
      body: JSON.stringify({
        name: store.name,
        description: store.description,
      }),
    })
    const data = await res.json()
    store.loading = false
    modalState.open = false
    nav.path = `/broadcasts/${data.id}`
  })

  return (
    <Col>
      <input
        type="text"
        value={store.name}
        placeholder={t('app.name_of_channel')}
        onInput$={$(async (event: KeyboardEvent) => {
          const input = event.target as HTMLInputElement
          store.name = input.value
        })}
      />
      <MdEditor
        onChange$={$(async (text: string) => {
          store.description = text
        })}
      />
      <Button onClick$={handleSubmit}>
        {store.loading ? t('loading') : t('send')}
      </Button>
    </Col>
  )
})
