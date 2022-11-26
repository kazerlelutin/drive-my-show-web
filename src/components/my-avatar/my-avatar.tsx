import { component$, useStylesScoped$, useContext } from '@builder.io/qwik'
import { Avatar } from '../ui/avatar/avatar'
import styles from './my-avatar.css?inline'
import { sessionContext } from '../session/session.context'

export const MyAvatar = component$(() => {
  useStylesScoped$(styles)
  const { session } = useContext(sessionContext)

  return <Avatar src={session?.profile_image_url} alt={session?.login} />
})
