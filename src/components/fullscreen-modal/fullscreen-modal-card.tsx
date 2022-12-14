import { component$, Slot, $ } from '@builder.io/qwik'
import { Card } from '../ui/card/card'
import { useContext } from '@builder.io/qwik'
import { fullscreenModalContext } from './fullscreen-modal.context'

type FullscreenModalCardProps = {
  title?: string
}

export const FullscreenModalCard = component$(
  ({ title }: FullscreenModalCardProps) => {
    const state = useContext(fullscreenModalContext)

    return (
      <Card
        title={title}
        onClose$={$(() => {
          state.open = false
        })}
      >
        <Slot />
      </Card>
    )
  }
)
