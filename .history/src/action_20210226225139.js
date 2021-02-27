import { todoInput } from './dom.js'
import store from './store.js'

export const ADD_TODO = 'ADD_TODO'
export const INCREASE = 'INCREASE'

let id = 100
const dispatch = {
    addTodoList: () => {
        let text = todoInput.value
        if(!text) return;
        store.dispatch({
            type: ADD_TODO,
            data: {
                id: id++,
                text
            }
        })
        todoInput.value = ''
    }
}

export default dispatch