function applyMiddleware(...middlewares) {
    return createStore => (reducer, preloadState) => {
        let store = createStore(reducer, preloadState)
    }
}

// 用户调用：applyMiddleware(middleware1, middleware2, ...)
// createStore调用：用户调用：applyMiddleware(createStore)(reducer, preloadState)

export default applyMiddleware;