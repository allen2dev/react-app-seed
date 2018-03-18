import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'

import TodoList from './components/TodoList'
import TodoListModel from './models/TodoListModel'
import TodoModel from './models/TodoModel'

const store = new TodoListModel()

class App extends Component {
  render() {
    return (
      <div>
        {/* <DevTools /> */}
        <TodoList store={store} />
      </div>
    )
  }
}

store.addTodo('Get Coffee')
store.addTodo('Write simpler code')
store.todos[0].finished = true

setTimeout(() => {
  store.addTodo('Get a cookie as well')
}, 2000)

// playing around in the console
window.store = store

export default App
