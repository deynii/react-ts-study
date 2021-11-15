import { combineReducers, createStore } from 'redux'
import { pageReducer } from './page'
import { appReducer } from './app'

const reducer = combineReducers({
  page: pageReducer,
  app: appReducer,
})

const store = createStore(reducer)

export default store
