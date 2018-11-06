import React, { Component } from 'react';
import './TodoItemList.css';
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    render () {
        const { todos, onToggle, onRemove, onUpdate} = this.props;

        const todoList = todos.map((currentValue) => (
            <TodoItem todoItem={currentValue}
                      key={currentValue.id}
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
