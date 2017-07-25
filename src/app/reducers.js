import { combineReducers } from 'redux'

import userReducer from './modules/user/reducer'

const reducers = {
  user: userReducer
}

export default (initialState) => {
  return combineReducers(reducers, initialState)
}
