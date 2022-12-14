import { component$, Slot, useStylesScoped$, $ } from '@builder.io/qwik'
import { Card } from '../ui/card/card'
import styles from './fullscreen-modal.css?inline'
import { useContext } from '@builder.io/qwik'
import { fullscreenModalContext } from './fullscreen-modal.context'

type FullscreenModalProps = {
  title?: string
}
export const FullscreenModalContent = component$(
  ({ title }: FullscreenModalProps) => {
    useStylesScoped$(styles)
    const state = useContext(fullscreenModalContext)

    return (
      <>
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
      </>
    )
  }
)
