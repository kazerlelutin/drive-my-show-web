import {
  component$,
  useContext,
  useResource$,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik'
import styles from './channel-list.css?inline'
import { Col } from '~/components/ui/col/col'
import { ChannelType } from '~/types/channel.type'
import { sessionContext } from '../../session/session.context'
import { Loading } from '~/components/ui/loading/loading'
import { channelContext } from '~/components/contexts/channel.context'
import { ChannelLine } from '../channel-line/channel-line'

export const ChannelList = component$(() => {
  useStylesScoped$(styles)
  const { session } = useContext(sessionContext)
  const channelCtx = useContext(channelContext)
  const store = useStore<{ page: number }>({ page: 1 })

  const channelsData = useResource$<ChannelType[]>(
    async ({ track, cleanup }) => {
      track(() => channelCtx.count)
      track(() => channelCtx.channel)
      track(() => store.page)
      const abortController = new AbortController()
      cleanup(() => abortController.abort('cleanup'))
      const res = await fetch(`${import.meta.env.VITE_URL_API}/channel/all`, {
        signal: abortController.signal,
        headers: {
          Authorization: 'Bearer ' + session.token_api,
        },
      })
      return res.json()
    }
  )

  return (
    <Col smallGap>
      {channelsData.loading && <Loading />}
      {channelsData.promise.then((channels) => (
        <>
          {channels.map((channel) => (
            <ChannelLine {...channel} />
          ))}
        </>
      ))}
    </Col>
  )
})
