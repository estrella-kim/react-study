 /**
  *@title : reducer
  * @description : state을 변경한다.
  * **/

const error = () => {
  console.log('error encountered')
 }

const createTodo = () => {
    return {
        input : '',
        todos : todos.concat({ id : todos.length - 1 , text : input, checked : false})
    }
}

const fetchTodos = () => {
    return {
        todos : [
            { id : 0, text: '11', checked : false},
            { id : 1, text: '22', checked : false},
            { id : 2, text: '33', checked : false},
        ]
    }
}

const updateTodoText = () => {
    const { todos } = state;
    const index = todos.findIndex( (todo) => todo.id === id);

    return {
        todos : [
            ...todos.slice(0, index),
            {
                ...todos[index],
                text : editText
            },
            ...todos.slice(index+1)
        ]
    }
}

const updateTodoState = () => {
    const { todos} = this.state;
    const index = todos.findIndex( (todo) => todo.id === id)

    return {
        ...state,
        todos : [
            ...todos.slice(0, index),
            {
                ...todos[index],
                checked : !todos[index].checked
            },
            ...todos.slice(index+1)
        ]
    }
}

const deleteTodo = () => {
    const { todos} = this.state;

    const index = todos.findIndex( (todo) => todo.id === id)

    return {
        ...state,
        todos : [
            ...todos.slice(0, index),
            ...todos.slice(index+1)
        ]
    }

}

export const todo = (state, action)  => {
    switch(action.type){
     case 'CREATE_TODO' :
         createTodo();
         break;
     case 'UPDATE_TODO_STATE' :
         updateTodoState();
         break;
     case 'UPDATE_TODO_TEXT' :
         updateTodoText();
         break;
     case 'DELETE_TODO' :
         deleteTodo();
         break;
     case 'FETCH_TODO' :
         fetchTodos();
         break;
     default :
         console.log('error encountered')
    }
}