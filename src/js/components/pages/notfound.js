import React from 'react'
import { Grid, Link, Icon } from 'semantic-ui-react'

const NotFound = () =>
    <Grid container columns={4}>
        <Grid.Row>
            <Grid.Column>
                <h1>Error 404</h1>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                Page not found
            </Grid.Column>
        </Grid.Row>
    </Grid>

export default NotFound