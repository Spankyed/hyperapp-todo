/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {RemoveButton} from './remove-button'
import {ToggleButton} from './toggle-button'
import {hasTouchSupport} from '../utils/has-touch-support'

export const TodoItem = ({todo, actions}) =>
  <div> {
  !hasTouchSupport
  ? <div class='row'>
    <div class='column column-15'>
      <RemoveButton actions={actions} id={todo.id} />
      <ToggleButton actions={actions} id={todo.id} />
    </div>
    <div
      class={todo.done ? 'done column column-85' : 'column column-85'}
      contenteditable
      data-uuid={todo.id}
      onkeyup={e => e.keyCode === 13 ? actions.editEnter(e) : null}
      oninput={e => (todo.value = e.target.textContent || '')}
      onblur={actions.edit}>
      {todo.value}
    </div>
  </div>
  : <div
    class={todo.done ? 'done item row' : 'item row'}
    contenteditable
    data-uuid={todo.id}
    onkeyup={e => e.keyCode === 13 ? actions.editEnter(e) : null}
    oninput={e => (todo.value = e.target.textContent || '')}
    onblur={actions.edit}>
    {todo.value}
  </div>
} </div>
