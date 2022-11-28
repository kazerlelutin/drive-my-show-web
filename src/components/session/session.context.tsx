import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot,
} from '@builder.io/qwik'

export type Session = {
  login: string
  profile_image_url: string
  offline_image_url: string
  display_name: string
  id: string
  description: string
  broadcaster_type: string
  view_count: number
  created_at: string
  token: string
  token_api: string
  current_channel: string
  channel_count: number
  profile: 'free' | 'premium' | 'all_star'
}
export const sessionContext = createContext<{
  session: Session
}>('session')

export const SessionProvider = component$(
  ({ defaultValue }: { defaultValue: Session }) => {
    const state = useStore<{
      session: Session
    }>({ session: defaultValue })

    useContextProvider(sessionContext, state)
    return (
      <>
        <Slot />
      </>
    )
  }
)
