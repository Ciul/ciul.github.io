import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import logger from 'redux-logger'
import appReducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const appMiddlewares = [logger()]

const storeFactory = (initialState = {}, otherReducers = {}, otherMiddlewares = []) =>
    createStore(
        combineReducers({
            ...appReducers,
            ...otherReducers
        }),
        initialState,
        composeEnhancers(
            applyMiddleware(...appMiddlewares, ...otherMiddlewares)
        )
    )

export default storeFactory