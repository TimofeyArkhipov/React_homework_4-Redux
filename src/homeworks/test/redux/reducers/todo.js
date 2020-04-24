import { REMOVE_TODO, UPDATE_TODO } from '../actions/todo';

const initialState = {
    isLoading: false,
    items: [
        {
            id: 1,
            title: 'Walk the dog',
            completed: false
        },
        {
            id: 2,
            title: 'Make a dinner',
            completed: false
        }
    ]
}



export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(todo => todo.id !== action.payload)
            }
        case UPDATE_TODO:
            return {
                ...state,
                items: state.items.map(todo => todo.id === action.payload.id ? { ...todo, ...action.payload } : todo)
            }
        default: return state;
    }
}