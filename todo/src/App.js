import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {

  id = 3;

  state = {
    input : '',
    editingText : '',
    todos : [
        { id : 0, text: '11', checked : false, edited : false},
        { id : 1, text: '22', checked : false, edited : false},
        { id : 2, text: '33', checked : false, edited : false},
    ]
  };
  handleChange = (e) => {
      this.setState({
        input : e.target.value
    })
  }

  handleKeyPress = (e) => {
      if(e.key === 'Enter') {
          this.handleCreate();
      }
  }

  handleCreate = () => {
    const { input, todos } = this.state;

    this.setState({
        input : '',
        todos : todos.concat({ id : todos.length - 1 , text : input, checked : false, edited : false})
    })
  }

  handleToggle = (id) => {
      const { todos} = this.state;

      const index = todos.findIndex( (todo) => todo.id === id)

      this.setState({
          ...this.state,
          todos : [
              ...todos.slice(0, index),
              {
                  ...todos[index],
                  checked : !todos[index].checked
              },
              ...todos.slice(index+1)
          ]
      })
  }

  handleRemove = (id) => {
      const { todos} = this.state;

      const index = todos.findIndex( (todo) => todo.id === id)

      this.setState({
          ...this.state,
          todos : [
              ...todos.slice(0, index),
              ...todos.slice(index+1)
          ]
      })
  }

  handleEditFlag = (id) => {
      const { todos} = this.state;

      const index = todos.findIndex( (todo) => todo.id === id)

      this.setState({
          ...this.state,
          todos : [
              ...todos.slice(0, index),
              {
                  ...todos[index],
                  edited : !todos[index].edited
              },
              ...todos.slice(index+1)
          ]
      })
  }

  handleEditChange = (e, id) => {
      const { todos} = this.state;

      this.setState({
          todos,
          editingText : e.target.value
      })
  }

    handleUpdate = (e, id) => {
        const { todos, editingText} = this.state;
        const index = todos.findIndex( (todo) => todo.id === id);

        e.stopPropagation();

        if(e.key === 'Enter') {
            this.setState({
                todos : [
                    ...todos.slice(0, index),
                    {
                        ...todos[index],
                        text : editingText,

                    },
                    ...todos.slice(index+1)
                ],
                editingText : ''
            })
        }

    }


  render() {
      const { input, todos, editingText} = this.state;
      const {  handleKeyPress, handleChange, handleToggle, handleRemove, handleCreate, handleEditFlag, handleUpdate, handleEditChange } = this;

    return (
        <TodoListTemplate form={<Form value={input}
                                      onChange={handleChange}
                                      onKeyPress={handleKeyPress}
                                      onCreate={handleCreate}

        />}>
          <TodoItemList todos={todos}
                        editingText={editingText}
                        onToggle={handleToggle}
                        onRemove={handleRemove}
                        onToggleEdit={handleEditFlag}
                        onUpdate={handleUpdate}
                        onEditChange={handleEditChange}
          />
        </TodoListTemplate>
    );
  }
}

export default App;
