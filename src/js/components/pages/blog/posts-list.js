import React from 'react'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    posts: [...state.posts]
})

const PostsList = ({ posts = [] }) =>
    <div>
        <h2>Blog</h2>

        <div>
            {(posts.length) ?
                <div>
                    {posts.map((post) => 
                        <div key={post._id}>
                            <h3>
                                <Link to={`/blog/${post._id}`}>{post.title}</Link>
                            </h3>
                            <p>{post.content}</p>
                        </div>
                    )}
                </div>
                :
                <div>No posts found</div>
            }
        </div>

        <Link to='/'>Go to Home</Link>
    </div>

const PostsListWithData = connect(mapStateToProps)(PostsList)

export default PostsListWithData