import { component$, useContext } from '@builder.io/qwik'
import { Button } from '~/components/ui/button/button'
import { channelContext } from '../contexts/channel.context'
import { $translate as t } from 'qwik-speak'

export const CurrentChannel = component$(() => {
  const { channel } = useContext(channelContext)

  return (
    <span title={t('app.active_channel')}>
      <Button variant="normal">{channel}</Button>
    </span>
  )
})
