import React, { Component } from 'react';
import './TodoItem.css';


class TodoItem extends Component {



    render() {
        const { text, checked, id, edited, onToggle, onRemove, onToggleEdit, onUpdate, onEditChange, editingText } = this.props;

        function changeText( value) {
            return value;
        }

        return (
            <div className={`todo-item ${edited && 'editing'}` } onClick={()=> onToggle(id)} >
                { !edited && (<div>
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                    <div className={`todo-text ${checked &&'checked'}`}>
                        <div>{text}</div>
                    </div>
                    <span className="remove" onClick={(e) => {
                        e.stopPropagation();
                        onRemove(id);
                    }}>&times;
                    </span>
                    <span onClick={(e) => {e.stopPropagation(); console.log(id); onToggleEdit(id)}}>수정</span>
                </div>)}


                { edited &&
                (<div className="edit-block"
                >
                    <input value={editingText}
                           onChange={ onEditChange}
                           onKeyPress={(e) => {e.stopPropagation(); if(e.key==='enter') onUpdate(e, id)}}/>
                </div>)
                }

            </div>
        )
    }
}

export default TodoItem;
