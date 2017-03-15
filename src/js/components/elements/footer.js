import React from 'react'
import { Grid, GridColumn, GridRow, Icon } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Footer = () =>
    <Grid as='footer' centered>
        <GridRow>
            <GridColumn>
                <a href='http://facebook.com'>
                    <Icon name='facebook' />
                </a>
            </GridColumn>
            <GridColumn>
                <a href='http://twitter.com'>
                    <Icon name='twitter'/>
                </a>
            </GridColumn>
            <GridColumn>
                <a href='http://instagram.com'>
                    <Icon name='instagram' />
                </a>
            </GridColumn>
            <GridColumn>
                <a href="http://github.com">
                    <Icon name='github' />
                </a>
            </GridColumn>
        </GridRow>

        <GridRow>
            <GridColumn>
                &copy; Ciul - Copyright {moment().year()}.
            </GridColumn>
        </GridRow>
    </Grid>

export default Footer