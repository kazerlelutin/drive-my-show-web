import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import styles from './fullscreen-modal.css?inline'
import { useContext } from '@builder.io/qwik'
import { fullscreenModalContext } from './fullscreen-modal.context'
import { FullscreenModalCard } from './fullscreen-modal-card'

type FullscreenModalProps = {
  title?: string
}
export const FullscreenModal = component$(({ title }: FullscreenModalProps) => {
  useStylesScoped$(styles)
  const state = useContext(fullscreenModalContext)

  return (
    <>
      <Slot name="action" />
      {state?.open && (
        <div class="container">
          <div class="content">
            <FullscreenModalCard title={title}>
              <Slot name="content" />
            </FullscreenModalCard>
          </div>
        </div>
      )}
    </>
  )
})
