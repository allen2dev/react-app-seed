import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import Todo from './Todo'

@observer
class TodoList extends React.Component {
  @observable newTodoTitle = ''

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          创建待办事项:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">新增</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        剩余任务: {this.props.store.unfinishedTodoCount}
      </div>
    )
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value
  }

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle)
    this.newTodoTitle = ''
    e.preventDefault()
  }
}

export default TodoList
