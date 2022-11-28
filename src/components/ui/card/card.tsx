import {
  component$,
  PropFunction,
  Slot,
  useStylesScoped$,
} from '@builder.io/qwik'
import { Flex } from '../flex/flex'
import { CloseIcon } from '../icons/close-icon'
import styles from './card.css?inline'

interface CardProps {
  type?: 'classic' | 'highlight' | 'warning' | 'info'
  title?: string
  onClose$?: PropFunction<() => void>
}

export const Card = component$(
  ({ type = 'classic', title, onClose$ }: CardProps) => {
    useStylesScoped$(styles)

    const attrClose = {
      onClick$: onClose$ ? onClose$ : undefined,
    }

    return (
      <div class="card" data-type={type}>
        {(title || onClose$) && (
          <div class="title">
            <Flex spaceBetween>
              {title}
              {onClose$ && (
                <div class="close" {...attrClose}>
                  <CloseIcon />
                </div>
              )}
            </Flex>
          </div>
        )}
        <div class="main">
          <Slot />
        </div>
      </div>
    )
  }
)
