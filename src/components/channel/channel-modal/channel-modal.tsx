import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './channel-modal.css?inline'
import { Col } from '~/components/ui/col/col'
import { ChannelList } from '../channel-list/channel-list'
import { ChannelForm } from '../channel-form/channel-form'

export const ChannelModal = component$(() => {
  useStylesScoped$(styles)

  return (
    <Col>
      <ChannelList />
      <ChannelForm />
    </Col>
  )
})
