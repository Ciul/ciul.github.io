import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ match, location }) => (
    <div>
        <span>Este es el Blog</span>
        <Link to='/'>Home</Link>
    </div>
)

export default Blog