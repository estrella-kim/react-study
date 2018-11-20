import React, { Component,} from 'react';
import './TodoItemList.css';
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    render () {
        const { todos, onToggle, onRemove, onUpdate, onFilter } = this.props;

        const todoList = todos.map((todo) => (
            <TodoItem todoItem={todo}
                      key={todo.id}
                      onToggle={onToggle}
                      onRemove={onRemove}
                      onUpdate={onUpdate}
            ></TodoItem>
        ));
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;
