import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <span>Este es el home</span>
        <Link to='/blog'>Blog</Link>
    </div>
)

export default Home