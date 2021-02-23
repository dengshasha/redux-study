function createStore(reducer) {
    let state;
    let listeners = []
    function dispatch(action) {
        state = reducer(state, action)
        for(let i = 0; i < listeners.length; i++) {
            listeners[i]()
        }
    }

    function getState() {
        return state
    }

    function subscribe(listener) {
        if(typeof listener !== 'function') return;
        listeners.push(listener)
        return function unsubscribe() {
            let index = listeners.findIndex(item => item === listener)
            index > -1 && listeners.splice(index, 1)
        }
    }

    dispatch({type: `INIT_${Math.random()}`})
    return {
        dispatch,
        getState,
        subscribe
    }
}

export default createStore