import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Pages from './pages'
import { Nav, Footer } from './elements/index.js'

const Root = () =>
    <Router>
        <div>
            <Nav />

            <Switch>
                <Route exact path='/' component={Pages.Home} />
                <Route path='/blog' component={Pages.Blog} />
                <Route component={Pages.NotFound} />
            </Switch>

            <Footer />
        </div>
    </Router>

export default Root 