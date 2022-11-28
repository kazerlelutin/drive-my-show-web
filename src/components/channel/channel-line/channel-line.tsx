import {
  component$,
  useContext,
  useStylesScoped$,
  $,
  useStore,
} from '@builder.io/qwik'
import styles from './channel-line.css?inline'
import { channelContext } from '~/components/contexts/channel.context'
import { ChannelType } from '~/types/channel.type'
import { $translate as t } from 'qwik-speak'
import { Chip } from '~/components/ui/chip/chip'
import { Flex } from '~/components/ui/flex/flex'
import { sessionContext } from '../../session/session.context'

export const ChannelLine = component$(({ name, current, id }: ChannelType) => {
  useStylesScoped$(styles)
  const state = useStore({ loading: false })
  const channelCtx = useContext(channelContext)
  const { session } = useContext(sessionContext)

  const handleSubmit = $(async (type: 'active' | 'delete') => {
    if (state.loading) return
    state.loading = true
    const res = await fetch(`${import.meta.env.VITE_URL_API}/channel/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session.token_api,
      },
      body: JSON.stringify({ id }),
    })
    const data = await res.json()
    state.loading = false
    channelCtx.count = 0
    if (type === 'delete') channelCtx.count = data.count
    if (type === 'active') channelCtx.channel = data.name
  })

  return (
    <div class="root">
      <div class="name">{name}</div>
      <div className="actions">
        {current && <Chip text={t('app.active_channel')} type="highlight" />}
        {!current && (
          <Flex smallGap>
            {state.loading ? (
              t('app.loading')
            ) : (
              <>
                <Chip
                  text={t('app.activated')}
                  onClick$={() => handleSubmit('active')}
                />
                <Chip
                  text={t('app.delete')}
                  type="warning"
                  onClick$={() => handleSubmit('delete')}
                />
              </>
            )}
          </Flex>
        )}
      </div>
    </div>
  )
})
