/**
 *@title : reducer
 * @description : state을 변경한다.
 * **/
const initialState = [
    { id : 0, text: '11', checked : false},
    { id : 1, text: '22', checked : false},
    { id : 2, text: '33', checked : false},
];

export const todos = (state = initialState, action)  => {
    switch(action.type){
        case 'CREATE_TODO' :
            return state.concat({
                id : state.length - 1 ,
                text : action.input,
                checked : false
            })
               // input :'',
        case ('UPDATE_TODO_STATE' || 'UPDATE_TODO_TEXT') :
            return state.map( (list, i) => {
                    if (i === action.index) {
                        return todo(state[action.index], action)
                    }
                    return list
                })
        case 'DELETE_TODO' :
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ]
        case 'FETCH_TODO' :
            return [
                    { id : 0, text: '11', checked : false},
                    { id : 1, text: '22', checked : false},
                    { id : 2, text: '33', checked : false},
            ]
        default :
            return state;
    }
}

export const todo = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_TODO_STATE' :
            return {
                ...state,
                checked : !state.checked
            }
        case 'UPDATE_TODO_TEXT' :
            return {
                 ...state,
                text : action.editText
            }
        default:
            return state;
    }
}
