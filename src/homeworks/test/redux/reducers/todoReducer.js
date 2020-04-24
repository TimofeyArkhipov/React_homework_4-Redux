import * as actions from '../actions/todo'

export default function todoReducer (state = [], action) {
    switch (actions.type) {
        case actions.ADD_TODO: return [action.playload, ...state];
        case actions.REMOVE_TODO: return state.filter(todo => todo.id !== action.playload);
        case actions.UPDATE_TODO: return state.map(todo => todo.id === action.playload.id ? {...todo, ...action.playload} : todo);
    }
}
