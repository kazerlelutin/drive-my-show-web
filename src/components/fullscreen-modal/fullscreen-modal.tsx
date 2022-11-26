import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import { Card } from '../ui/card/card'
import styles from './fullscreen-modal.css?inline'
import { useContext } from '@builder.io/qwik'
import {
  fullscreenModalContext,
  FullscreenModalProvider,
} from './fullscreen-modal.context'
import { Flex } from '../ui/flex/flex'

export const FullscreenModal = component$(() => {
  useStylesScoped$(styles)
  const state = useContext(fullscreenModalContext)
  return (
    <FullscreenModalProvider>
      <Slot name="action" />
      {state.open && (
        <div class="container">
          <div class="content">
            <Card>
              <Flex reverse>
                <div class="close" onClick$={() => (state.open = false)}>
                  close
                </div>
              </Flex>

              <Slot name="content" />
            </Card>
          </div>
        </div>
      )}
    </FullscreenModalProvider>
  )
})
