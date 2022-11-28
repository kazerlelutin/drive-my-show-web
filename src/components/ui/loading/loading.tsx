import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './loading.css?inline'
import { $translate as t } from 'qwik-speak'
import { Flex } from '../flex/flex'

export const Loading = component$(() => {
  useStylesScoped$(styles)

  return (
    <div class="root">
      <Flex center>{t('app.loading')}</Flex>
    </div>
  )
})
