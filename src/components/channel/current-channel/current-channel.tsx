import { component$, useContext, $ } from '@builder.io/qwik'
import { $translate as t } from 'qwik-speak'
import { channelContext } from '../../contexts/channel.context'
import { Button } from '../../ui/button/button'
import { FullscreenModal } from '../../fullscreen-modal/fullscreen-modal'
import { fullscreenModalContext } from '../../fullscreen-modal/fullscreen-modal.context'
import { ChannelModal } from '../channel-modal/channel-modal'

export const CurrentChannel = component$(() => {
  const { channel } = useContext(channelContext)
  const modalState = useContext(fullscreenModalContext)

  return (
    <FullscreenModal title={t('app.my_channels')}>
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
      <span q:slot="content">
        <ChannelModal />
      </span>
    </FullscreenModal>
  )
})
