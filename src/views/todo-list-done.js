/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {todoItem} from './todo-item'

export const todoListDone = (model, actions) =>
  <div id='todo-list-done'>
    {
        model.todos
        .filter(t => t.done)
        .map(t => todoItem(t, actions))
    }
  </div>
