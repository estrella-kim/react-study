/** action type 정의 **/
const UPDATE_INPUT = "UPDATE_INPUT";

const CREATE_TODO = "CREATE_TODO";

const FETCH_TODO = "FETCH_TODO";

const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";

const UPDATE_TODO_STATE = "UPDATE_TODO_STATE";

const DELETE_TODO = "DELETE_TODO";

const FILTER_STATE = "FILTER_STATE"

/** action 생성함수 정의 **/
//객체를 리턴
export const updateInput = (input) => ({type: UPDATE_INPUT, input: input});

export const createTodo = (input) => ({type: CREATE_TODO, input: input });

export const fetchTodo = () => ({type: FETCH_TODO });

export const updateTodoText = (index, editText) => ({type: UPDATE_TODO_TEXT, index: index , editText : editText});

export const updateTodoState = (index) => ({type : UPDATE_TODO_STATE, index: index});

export const deleteTodo = (index) => ({type: DELETE_TODO, index:index });

export const filterState = () => ({type: FILTER_STATE, filter: 'TODO'})

