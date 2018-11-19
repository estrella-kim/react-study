import React, { Component} from 'react';
import TodoInputContainer from './TodoInputContainer';
import TodoListContainer from './TodoListContainer';
import './TodoContainer.css';

class App extends Component {

    render() {
        return (
            <div className="todo-list-template">
                <TodoInputContainer/>
                <TodoListContainer className="todos-wrapper"/>
            </div>
        );
    }
}

export default App;

