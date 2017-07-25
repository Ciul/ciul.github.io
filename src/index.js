import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import storeFactory from './app/store'
import App from './app'

const initialState  = {}
const store         = storeFactory(initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)