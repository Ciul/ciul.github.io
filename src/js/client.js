import 'es6-promise/auto'
import 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import ApolloClient, { createNetworkInterface } from 'apollo-client'
// import { ApolloProvider } from 'react-apollo'
import storeFactory from './include/store'
import Root from './components/root'

window.React = React

/* Webpack Hot Module Reload Enabled */
if(module.hot) {
    module.hot.accept()
}

// const networkInterface = createNetworkInterface({ uri: 'http://localhost:8000/graphql' })
// const client = new ApolloClient({
//     networkInterface: networkInterface,
//     addTypename: true,
//     dataIdFromObject: (result) => {
//         if(result.id && result.__typename)
//             return result.__typename + result.id
        
//         return null
//     }
// })

/* Store Setup */
import initialState from './include/data'

const store = storeFactory(initialState/*, {'apollo': client.reducer()}, [client.middleware()]*/)

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('app')
)