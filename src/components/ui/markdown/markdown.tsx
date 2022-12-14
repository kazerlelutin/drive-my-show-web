import { component$ } from '@builder.io/qwik'
import showdown from 'showdown'

export const Markdown = component$(({ text }: { text: string }) => {
  const converter = new showdown.Converter()
  const txt = `${converter.makeHtml(text || '')}`

  return <span dangerouslySetInnerHTML={txt} />
})
