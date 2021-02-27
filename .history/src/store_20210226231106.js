import reducer from './reducer.js'
import createStore from './redux/createStore.js'
import combineReducer from './redux/combineReducer.js'

const store = createStore(combineReducer(reducer))

export default store