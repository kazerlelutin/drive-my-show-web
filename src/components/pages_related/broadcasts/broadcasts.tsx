import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Flex } from '~/components/ui/flex/flex'
import styles from './broadcasts.css?inline'
import { Card } from '../../ui/card/card'
import { ActionsBar } from '~/components/ui/actions-bar/actions-bar'
import { Col } from '~/components/ui/col/col'
import { BroadcastPopin } from '~/components/broadcast/broadcast-popin'
import { FullscreenModalProvider } from '~/components/fullscreen-modal/fullscreen-modal.context'
// <MdEditor onChange$={(text) => console.log('T', text)} />
export const Broadcast = component$(() => {
  useStylesScoped$(styles)

  return (
    <Col>
      <ActionsBar>
        <FullscreenModalProvider>
          <BroadcastPopin />
        </FullscreenModalProvider>
      </ActionsBar>
      <Flex>
        <Card title="Mes dernieres emissions">Liste</Card>
      </Flex>
    </Col>
  )
})
