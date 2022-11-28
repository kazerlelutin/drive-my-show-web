import { component$, Slot, useStylesScoped$, $ } from '@builder.io/qwik'
import { Card } from '../ui/card/card'
import styles from './fullscreen-modal.css?inline'
import { useContext } from '@builder.io/qwik'
import {
  fullscreenModalContext,
  FullscreenModalProvider,
} from './fullscreen-modal.context'

type FullscreenModalProps = {
  title?: string
}
export const FullscreenModal = component$(({ title }: FullscreenModalProps) => {
  useStylesScoped$(styles)
  const state = useContext(fullscreenModalContext)
  return (
    <FullscreenModalProvider>
      <Slot name="action" />
      {state.open && (
        <div class="container">
          <div class="content">
            <Card
              title={title}
              onClose$={$(() => {
                state.open = false
              })}
            >
              <Slot name="content" />
            </Card>
          </div>
        </div>
      )}
    </FullscreenModalProvider>
  )
})
