# 目录说明
- server ---------- 用于启动本地服务，解决跨域问题
- src    ---------- 项目代码
    - redux ------- redux源码

# 运行项目
1. 项目拷贝到本地
2. cd server => npm i => node index.js 启动服务
3. 访问http://localhost:3000/

# createStore版本一
```
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
```