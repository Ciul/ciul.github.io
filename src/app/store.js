import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducerFactory from './reducers'
// import middlewares from './middlewares'

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

const initialState      = {}
const rootReducer       = reducerFactory(initialState)
const storeEnhancers    = composeEnhancers(
  applyMiddleware(/*...middlewares*/)
)

export default () => {
  return createStore(rootReducer, storeEnhancers)
}
