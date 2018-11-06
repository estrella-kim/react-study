import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';

class App extends Component {

  id = 3;

  state = {
    input : '',
    todos : [
        { id : 0, text: '11', checked : false},
        { id : 1, text: '22', checked : false},
        { id : 2, text: '33', checked : false},
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
        todos : todos.concat({ id : todos.length - 1 , text : input, checked : false})
    })
  }

  handleToggle = (id) => {
      const { todos} = this.state;

      console.log('toggle')
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

    handleUpdate = (editText, id) => {
        const { todos } = this.state;
        const index = todos.findIndex( (todo) => todo.id === id);

        this.setState({
            todos : [
                ...todos.slice(0, index),
                {
                    ...todos[index],
                    text : editText
                },
                ...todos.slice(index+1)
            ]
        })

    }



  render() {
      const { input, todos} = this.state;
      const {  handleKeyPress, handleChange, handleToggle, handleRemove, handleCreate, handleUpdate} = this;

    return (
        <TodoListTemplate form={<Form value={input}
                                      onChange={handleChange}
                                      onKeyPress={handleKeyPress}
                                      onCreate={handleCreate}

        />}>
          <TodoItemList todos={todos}
                        onToggle={handleToggle}
                        onRemove={handleRemove}
                        onUpdate={handleUpdate}
          />
        </TodoListTemplate>
    );
  }
}

export default App;
