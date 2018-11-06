import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.css';


const cx = classNames.bind(styles);


class TodoItem extends Component {


    state = {
        editFlag : false,
        editText : ''
    }


    handleEditFlag = (defaultText) => {
        this.setState({
            editText : defaultText,
            editFlag : true
        })
    }

    handleEditInput = (e) => {
        this.setState({
            ...this.state,
            editText : e.target.value
        })
    }

    handleEditUpdate = (e, index) => {
        if(e.key === 'Enter') {
            this.props.onUpdate(this.state.editText, index);
            this.setState({
                ...this.state,
                editFlag : false
            })
        }
    }



    render() {
        const { todoItem, onToggle, onRemove } = this.props;
        const { editFlag, editText } = this.state;
        const { handleEditFlag, handleEditInput, handleEditUpdate} = this;

        return (
            <div className={cx('todo-item',{ editing : editFlag})} >
                <div className={cx('todo-text', {checked : todoItem.checked})} onClick={(e)=> {e.stopPropagation(); onToggle(todoItem.id)}}>
                    {
                        todoItem.checked && (<div className="check-mark">✓</div>)
                    }
                    <div>{todoItem.text}</div>
                    <span className="remove" onClick={(e) => {
                        e.stopPropagation();
                        onRemove(todoItem.id);
                    }}>&times;
                    </span>
                    <span onClick={(e) => {e.stopPropagation(); handleEditFlag(todoItem.text)}}>수정</span>
                </div>
                <div className="edit-block">
                    <input value={editText}
                           onChange={ handleEditInput.bind(this)}
                           onKeyPress={(e)=> { e.stopPropagation();
                               handleEditUpdate(e,todoItem.id)
                           }}/>
                </div>
            </div>
        )
    }
}

export default TodoItem;
