import { useContext, useStore } from '@builder.io/qwik'
import { channelContext } from '../contexts/channel.context'
import { sessionContext } from '../session/session.context'

export const useChatOptions = () => {
  const chan = useContext(channelContext)
  const { session } = useContext(sessionContext)
  const state = useStore<{
    opts: { channels: string[]; options: Object; identity: Object }
  }>({
    opts: {
      options: { debug: false },
      identity: {
        username: session.login,
        password: `oauth:${session.token}`,
      },
      channels: [chan.channel],
    },
  })

  return state.opts
}
