import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import styles from './grid-box.css?inline'

//For grid : use for create a grid cell with overflow
export const GridBox = component$(() => {
  useStylesScoped$(styles)
  return (
    <div class="container">
      <div className="box">
        <Slot />
      </div>
    </div>
  )
})
