import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import PostsList from './posts-list'
import SinglePost from './single-post'

const Blog = () =>
    <Switch>
        <Route exact path='/blog' component={PostsList} />
        <Route exact path='/blog/:postId' component={SinglePost} />
    </Switch>

export default Blog