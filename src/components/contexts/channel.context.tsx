import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot,
} from '@builder.io/qwik'

export const channelContext = createContext<{
  channel: string
  count: number
}>('channel')

export const ChannelProvider = component$(
  ({ defaultValue }: { defaultValue: { channel: string; count: number } }) => {
    const state = useStore<{
      channel: string
      count: number
    }>({ channel: defaultValue.channel, count: defaultValue.count })

    useContextProvider(channelContext, state)
    return (
      <>
        <Slot />
      </>
    )
  }
)
