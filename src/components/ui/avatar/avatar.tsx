import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './avatar.css?inline'

type AvatarProps = {
  alt: string
  src: string
  size?: 'avatar' | 'profile'
  type?: 'classic' | 'highlight' | 'warning' | 'info'
}
export const Avatar = component$(
  ({ alt, src, type = 'classic', size = 'avatar' }: AvatarProps) => {
    useStylesScoped$(styles)

    return (
      <div class="root" data-type={type} data-size={size}>
        <img src={src} alt={alt} class="img" />
      </div>
    )
  }
)
