import { todoInput } from './dom.js'
import store from './store.js'

let id = 100
const dispatch = {
    addTodoList: () => {
        let text = todoInput.value
        if(!text) return;
        store.dispatch({
            type: 'ADD',
            data: {
                id: id++,
                text
            }
        })
        todoInput.value = ''
    }
}

export default dispatch