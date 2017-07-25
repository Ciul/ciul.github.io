import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './modules/home/page'
import Blog from './modules/blog/page'

const App = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
        </Switch>
    </Router>
)

export default App