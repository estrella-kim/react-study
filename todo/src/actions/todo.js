/** action type 정의 **/
const CREATE_TODO = "CREATE_TODO"

const FETCH_TODO = "FETCH_TODO"

const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT"

const UPDATE_TODO_STATE = "UPDATE_TODO_STATE"

const DELETE_TODO = "DELETE_TODO";


/** action 생성함수 정의 **/
//객체를 리턴
export const createTodo = () => ({type: CREATE_TODO });

export const fetchTodo = () => ({type: FETCH_TODO });

export const updateTodoText = () => ({type: UPDATE_TODO_TEXT });

export const updateTodoState = () => ({type : UPDATE_TODO_STATE});

export const deleteTodo = () => ({type: DELETE_TODO });
