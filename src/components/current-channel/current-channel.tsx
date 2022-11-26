import { component$, useContext, $ } from '@builder.io/qwik'
import { $translate as t } from 'qwik-speak'
import { channelContext } from '../contexts/channel.context'
import { Button } from '../ui/button/button'
import { FullscreenModal } from '../fullscreen-modal/fullscreen-modal'
import { fullscreenModalContext } from '../fullscreen-modal/fullscreen-modal.context'

export const CurrentChannel = component$(() => {
  const { channel } = useContext(channelContext)
  const modalState = useContext(fullscreenModalContext)

  return (
    <FullscreenModal>
      <span title={t('app.active_channel')} q:slot="action">
        <Button
          variant="normal"
          onClick$={$(async () => {
            modalState.open = true
          })}
        >
          {channel}
        </Button>
      </span>
      <p q:slot="content">Salut encore pour voir</p>
    </FullscreenModal>
  )
})
