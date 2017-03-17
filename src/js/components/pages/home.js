import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Image, Container, Icon, Header, Segment, Form } from 'semantic-ui-react'
import { Nav, Footer } from '../elements'

const Home = () =>
    <div>
        <Nav />

        <Grid as='header'>
            <Image src='https://unsplash.it/1280/600' fluid />
        </Grid>

        <Grid container columns={2} relaxed>
            <Grid.Row>
                <Grid.Column>
                    <Image src="https:unsplash.it/500" fluid />
                </Grid.Column>

                <Grid.Column>
                    <h2>I am Dynamic and Creative</h2>

                    <p>Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate.</p>
                    <p>Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward.</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <Grid container columns={4}>
            <Grid.Row>
                <Grid.Column>
                    <Header>
                        <Icon name='code' size='huge' />
                        Header
                        <Header.Subheader>
                            Subheader
                        </Header.Subheader>
                    </Header>
                </Grid.Column>

                <Grid.Column>
                    <Header>
                        <Icon name='computer' />
                        <Icon name='tablet' />
                        <Icon name='mobile' />
                        Plataformas
                        <Header.Subheader>
                            Descripción aquí
                        </Header.Subheader>
                    </Header>
                </Grid.Column>

                <Grid.Column>
                    <Header>
                        <Icon name='bicycle' size='huge' />
                        Header
                        <Header.Subheader>
                            Subheader
                        </Header.Subheader>
                    </Header>
                </Grid.Column>

                <Grid.Column>
                    <Header>
                        <Icon name='book' size='huge' />
                        Header
                        <Header.Subheader>
                            Subheader
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <Grid container columns={3} columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <Segment>1</Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>1</Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>1</Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
                <Grid.Column>
                    <Button piled>Read More</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <Grid container columns={3} columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <Header>
                        Get in touch
                        <Header.Subheader>
                            Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring.
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
                <Grid.Column>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input label='First name' placeholder='First name' />
                            <Form.Input label='Email' placeholder='Email' />
                        </Form.Group>
                        <Form.TextArea label='Message' />
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <Footer />
    </div>
export default Home