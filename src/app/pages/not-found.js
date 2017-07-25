import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return (
        <div>
            <div>Oops something happened</div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound