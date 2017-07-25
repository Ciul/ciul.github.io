import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Blog from './pages/blog'
import NotFound from './pages/not-found'

const App = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default App