export const mdEditorOptions: Array<{
  icon: string
  pattern: string
  title: string
}> = [
  {
    icon: '<b>H1</b>',
    pattern: '\n# REPLACE \n',
    title: 'md.h1',
  },
  {
    icon: '<b>H2</b>',
    pattern: '\n## REPLACE \n',
    title: 'md.h2',
  },
  {
    icon: '<b>b</b>',
    pattern: '**REPLACE**',
    title: 'md.bold',
  },
  {
    icon: '<i>i</i>',
    pattern: '*REPLACE*',
    title: 'md.italic',
  },
  {
    icon: '<span>cite</span>',
    pattern: '> REPLACE',
    title: 'md.code',
  },
  {
    icon: '<span>---</span>',
    pattern: '\n ---',
    title: 'md.hrule',
  },
]
