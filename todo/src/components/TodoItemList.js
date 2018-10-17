import React, { Component } from 'react';
import './TodoItemList.css';
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    render () {
        const { todos, onToggle, onRemove} = this.props;

        const todoList = todos.map((currentValue) => (
            <TodoItem id={currentValue.id}
                          text={currentValue.text}
                          checked = {currentValue.checked}
                      key={currentValue.id}
                      onToggle={onToggle}
                      onRemove={onRemove}
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
