import {
  component$,
  useStylesScoped$,
  useSignal,
  useStore,
  $,
  PropFunction,
} from '@builder.io/qwik'

import styles from './md-editor.css?inline'
import { Markdown } from '../ui/markdown/markdown'
import { mdEditorOptions } from './md-editor.options'
import { useClientEffect$ } from '@builder.io/qwik'
import { $translate as t } from 'qwik-speak'

type MdEditorProps = {
  onChange$: PropFunction<(text: string) => void>
}

export const MdEditor = component$(({ onChange$ }: MdEditorProps) => {
  useStylesScoped$(styles)
  const state = useStore({
    mark: '',
    start: 0,
    end: 0,
    select: '',
    showPreview: false,
  })
  const ref = useSignal<HTMLTextAreaElement>()

  useClientEffect$(({ track }) => {
    track(() => state.mark)
    onChange$(state.mark)
  })

  return (
    <div class="container">
      <div class="options">
        {mdEditorOptions.map((option) => (
          <div
            class="option"
            title={t(option.title)}
            onClick$={$(() => {
              const txtArray = [...state.mark.split('')]
              txtArray.splice(
                state.start,
                state.end - state.start,
                option.pattern.replace('REPLACE', state.select)
              )
              return (state.mark = [...txtArray].join(''))
            })}
          >
            <span dangerouslySetInnerHTML={option.icon} />
          </div>
        ))}

        <a
          class="option"
          href="https://www.markdownguide.org/cheat-sheet/"
          target={'_blank'}
          title={t('md.help')}
        >
          <span>{'?'}</span>
        </a>

        <div
          class="option"
          onClick$={() => {
            state.showPreview = !state.showPreview
          }}
          title={t('md.preview')}
        >
          <span>{']['}</span>
        </div>
      </div>

      <div className="textZone" data-preview={state.showPreview}>
        <textarea
          class="textarea"
          onClick$={() => {
            state.start = ref?.value?.selectionStart ?? 0
            state.end = ref?.value?.selectionEnd ?? 0
            state.select = state.mark.slice(state.start, state.end)

            return state
          }}
          ref={ref}
          rows={
            state.mark.split('\n').length < 10
              ? 10
              : state.mark.split('\n').length
          }
          value={state.mark}
          onInput$={(ev) =>
            (state.mark = (ev.target as HTMLInputElement).value)
          }
        >
          {state.mark}
        </textarea>
        {state.showPreview && <Markdown text={state.mark} />}
      </div>
    </div>
  )
})
