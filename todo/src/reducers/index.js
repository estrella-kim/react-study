import { combineReducers} from 'redux';
import { todos, input } from './todo';

const rootReducers = combineReducers({
    input, todos
});

export default rootReducers;