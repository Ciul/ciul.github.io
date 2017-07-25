import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <div>Este es el Home</div>
            <Link to='/blog'>Blog</Link>
        </div>
    )
}