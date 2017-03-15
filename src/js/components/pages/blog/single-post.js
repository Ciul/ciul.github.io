import React from 'react'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state, { match }) => ({
    post: {
        ...state.posts.find((post) => {
            return post._id ==  match.params.postId
        })
    }
})

const SinglePost = ({ post }) =>
    <div>
        {(post) ?
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Link to='/blog'>Go to Blog</Link>
            </div>
            :
            <div>No post found</div>
        }
    </div>

const SinglePostWithData = connect(mapStateToProps)(SinglePost)

export default SinglePostWithData