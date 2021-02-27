import {
    INCREASE,
    ADD_TODO
} from './action.js'
import combineReducer from './redux/combineReducer.js'

let initialState = [
    {
        id: '99',
        text: '英语阅读'
    }
]
function todoList(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.data)
        default: return state
    }
}

function counter(state=0, action) {
    switch(action.type) {
        case INCREASE:
            return state+1
        default: return state
    }
}

export default combineReducer({
    todoList,
    counter
})