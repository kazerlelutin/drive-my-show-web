import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot,
} from '@builder.io/qwik'

type fullscreenModalContextState = {
  open: boolean
}
export const fullscreenModalContext =
  createContext<fullscreenModalContextState>('channel')

export const FullscreenModalProvider = component$(() => {
  const state = useStore<fullscreenModalContextState>({ open: false })
  useContextProvider(fullscreenModalContext, state)
  return (
    <>
      <Slot />
    </>
  )
})
