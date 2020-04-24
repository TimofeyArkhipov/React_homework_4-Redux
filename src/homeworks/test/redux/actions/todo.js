export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        playload: newTodo,
    }
}


export const removeTodo = removeId => {
    return {
        type: REMOVE_TODO,
        playload: removeId,
    }
}

export const updateTodo = updateTodo => {
    return {
        type: UPDATE_TODO,
        playload: updateTodo,
    }
}