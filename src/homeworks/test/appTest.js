import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/createStore'
// import ReduxContext from './contexts/ReduxContext';
import TodoList from './components/TodoList';
import AddTodoForm from './components/addTodoForm';

export default function AppTest() {
    return (
        <Provider store={store}>
            <AddTodoForm />
            <TodoList />
        </Provider>
    )
}