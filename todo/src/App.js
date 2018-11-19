import React, { Component} from 'react';
import { connect } from 'react-redux';
import { createTodo, updateTodoState, updateTodoText, deleteTodo } from './actions/todo';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {
  state = {
      input : ''
  };


  render() {
      const { store } = this.props;
      const { input} = this.state;
      console.log(store)
      const todos = store.getState().todos;
      const dispatch = store.dispatch;

      const handleChange = (e) => {
          this.setState({
              input : e.target.value
          })
      }

      const handleKeyPress = (e) => {
          if(e.key === 'Enter') {
              handleCreate();
          }
      }

      const handleCreate = () => {
          const { input } = this.state;

          dispatch(createTodo(input));
      }

      const handleToggle = (id) => {
          dispatch(updateTodoState(id));
      }

      const handleRemove = (id) => {
          dispatch(deleteTodo(id));
      }

      const handleUpdate = (editText, id) => {
          dispatch(updateTodoText(id, editText))
      }

    return (
        <TodoListTemplate form={<Form value={input}
                                      onChange={handleChange}
                                      onKeyPress={handleKeyPress}
                                      onCreate={handleCreate}

        />}>
          <TodoItemList todos={todos}
                        onToggle={handleToggle}
                        onRemove={id => dispatch(deleteTodo(id))}
                        onUpdate={handleUpdate}
          />
        </TodoListTemplate>
    );
  }
}

export default App;
