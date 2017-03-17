import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Pages from './pages'

const Root = () =>
    <Router>
        <Switch>
            <Route exact path='/' component={Pages.Home} />
            <Route path='/blog' component={Pages.Blog} />
            <Route component={Pages.NotFound} />
        </Switch>
    </Router>

export default Root