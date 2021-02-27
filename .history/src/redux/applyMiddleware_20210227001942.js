import compose from './compose.js'
// 对传入的middleware按从后往前执行，且后面执行的结果会作为前面的参数
function applyMiddleware(...middlewares) {
    return createStore => (reducer, preloadState) => {
        let store = createStore(reducer, preloadState)
    }
}

// 用户调用：applyMiddleware(middleware1, middleware2, ...)
// createStore调用：用户调用：applyMiddleware(createStore)(reducer, preloadState)

export default applyMiddleware;