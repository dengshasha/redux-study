import {todoListContainer} from './dom.js'
import store from './store.js'
function render() {
    let data = store.getState()
    if(!data || !data.length) return;
    let content = data.map(item => `<li key=${item.id}>${item.text}</li>`)
    todoListContainer.innerHTML = content.join('')
}

export default render
