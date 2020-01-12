import { todoRef } from '../firebase';
import types from './types'

export const addToDo = newToDo => async dispatch => { 
    todoRef.push().set(newToDo);
}
export const completeToDo = completeToDo => async dispatch => { 
    todoRef.child(completeToDo).remove();
}
export const fetchToDos = () => async dispatch => {
    todoRef.on("value", snapshot => {
        dispatch({
            type: types.FETCH_TODOS,
            payload: snapshot.val()
        })
    })
}