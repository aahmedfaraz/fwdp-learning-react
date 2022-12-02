// import services
import { useReducer } from 'react';

// import files
import todoContext from './todoContext';
import todoReducer from './todoReducer';

// import types
import { ADD_TASK } from '../types';

const TodoState = (props) => {

    const initialState = {
        todos: [
            "This is task 1",
            "This is task 2",
            "This is task 3",
        ]
    }

    const [ state, dispatch ] = useReducer(todoReducer, initialState);

    const addTask = (text) => {
        dispatch({
            type: ADD_TASK,
            payload: text,
        });
    };

    return (
        <todoContext.Provider value={{
            todos: state.todos,
            addTask: addTask
        }}>
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoState;