let initialState = [
    {
        id: '99',
        text: '英语阅读'
    }
]
function todoList(state=initialState, action) {
    switch(action.type) {
        case 'ADD':
            return state.concat(action.data)
        default: return state
    }
}

export default todoList