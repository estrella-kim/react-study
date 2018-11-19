import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoListTemplate from '../components/TodoListTemplate';
import Form from '../components/Form';
import { updateInput, createTodo} from '../actions/todo';

class TodoInputContainer extends Component {

    hanldeChange = (e) => {
        const { inputActions} = this.props;

        updateInput(e.target.value);
    }

    handleKeyPress =  (e) => {
        if(e.key === 'Enter') {
           this.handleCreate();
        }
    }

    handleCreate = () => {
        const { todoActions} = this.props;

        createTodo(this.props.input);
    }

    render() {
        const { hanldeChange, handleKeyPress, handleCreate } = this;
        const { input } = this.props;

        return (
            <TodoListTemplate form={<Form value={input}
                       onChange={hanldeChange}
                       onKeyPress={(e) => handleKeyPress(e, input)}
                       onCreate={() => handleCreate(input)}/>}>
            </TodoListTemplate>
        )
    }
}

const mapStateToProps = (state) => ({
    input : state.input
});

const mapDispatchToProps = (dispatch) => ({
    updateInput : bindActionCreators(updateInput, dispatch),
    createTodo : bindActionCreators(createTodo, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoInputContainer);