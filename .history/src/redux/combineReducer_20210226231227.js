function combineReducer(reducerObj) {
    let newState = {}
    return function(state={}, action) {
        Object.keys(reducerObj).forEach(key => {
            let reducer = reducerObj[key]
            newState[key] = reducer(state[key], action)
        })
        return newState;
    }
}

export default combineReducer;