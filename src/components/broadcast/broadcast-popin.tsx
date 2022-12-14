import { component$, useContext, $ } from '@builder.io/qwik'
import { $translate as t } from 'qwik-speak'
import { FullscreenModal } from '../fullscreen-modal/fullscreen-modal'
import { fullscreenModalContext } from '../fullscreen-modal/fullscreen-modal.context'
import { Button } from '../ui/button/button'
import { BroadcastForm } from './broadcast-form'

export const BroadcastPopin = component$(() => {
  const modalState = useContext(fullscreenModalContext)

  return (
    <FullscreenModal title={t('app.create_broadcast')}>
      <span title={t('app.active_channel')} q:slot="action">
        <Button
          variant="normal"
          onClick$={$(async () => {
            modalState.open = true
          })}
        >
          {t('app.create_broadcast')}
        </Button>
      </span>
      <span q:slot="content">
        <BroadcastForm />
      </span>
    </FullscreenModal>
  )
})
