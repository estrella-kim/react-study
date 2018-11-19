import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoItemList from '../components/TodoItemList';
import { updateTodoState, updateTodoText, deleteTodo } from '../actions/todo';

class TodoListContainer extends Component {

    handleToggle = (id) => {
        const { updateTodoState} = this.props;

        updateTodoState(id);
    }

    handleRemove = (id) => {
        const { deleteTodo } = this.props;

        deleteTodo(id);
    }

    handleUpdate = (editText, id) => {
        const { updateTodoText} = this.props;

        updateTodoText(id, editText);
    }

    render() {
        const { todos } = this.props;
        const { handleToggle, handleRemove, handleUpdate } = this;

        return (
            <TodoItemList className="todos-wrapper"
                          todos={todos}
                          onToggle={handleToggle}
                          onRemove={handleRemove}
                          onUpdate={handleUpdate}
            />
        )
    }
}

const mapStateToProps = state => ({
    todos : state.todos
})

const mapDispatchToProps = (dispatch) => ({
    updateTodoState : bindActionCreators(updateTodoState, dispatch),
    deleteTodo : bindActionCreators(deleteTodo, dispatch),
    updateTodoText : bindActionCreators(updateTodoText, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer);