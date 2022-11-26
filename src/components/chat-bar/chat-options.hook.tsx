import { useContext, useStore } from '@builder.io/qwik'
import { channelContext } from '../contexts/channel.context'
import { sessionContext } from '../session/session.context'

export const useChatOptions = () => {
  const chan = useContext(channelContext)
  const { session } = useContext(sessionContext)
  const state = useStore<{
    opts: {}
  }>({
    opts: {
      options: { debug: false },
      identity: {
        username: session.login,
        password: `oauth:${session.token}`,
      },
      channels: [chan.channel, 'faith', 'melina'],
    },
  })

  return state.opts
}
