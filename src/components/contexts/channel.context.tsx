import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot,
} from '@builder.io/qwik'

export const channelContext = createContext<{
  channel: string
}>('channel')

export const ChannelProvider = component$(
  ({ defaultValue }: { defaultValue: string }) => {
    const state = useStore<{
      channel: string
    }>({ channel: defaultValue })

    useContextProvider(channelContext, state)
    return (
      <>
        <Slot />
      </>
    )
  }
)
