import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'

const Home = () =>
    <Grid container columns={4}>
        <Grid.Row>
            <Grid.Column>
                <h1>Home</h1>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <ul>
                    <li>
                        <Link to="/blog">Go to Blog</Link>
                    </li>
                </ul>
            </Grid.Column>
        </Grid.Row>
        
    </Grid>

export default Home