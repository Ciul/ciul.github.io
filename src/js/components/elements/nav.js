import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon, Image } from 'semantic-ui-react'

const Nav = ({ location }) =>
    <Menu as='nav' borderless>
        <Menu.Menu>
            <Menu.Item header as={Link} to='/'>
                {/*Luis Carlos Osorio Jayk*/}
                Home
            </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
            <Menu.Item header as={Link} to='/' active={location.pathname === '/'}>
                Home
            </Menu.Item>
            {/*<Menu.Item header as={Link} to='/about' active={location.pathname === '/about'}>
                About
            </Menu.Item>
            <Menu.Item header as={Link} to='/contact' active={location.pathname === '/contact'}>
                Contact
            </Menu.Item>*/}
            {/*<Menu.Item as={Link} to='/blog' active={location.pathname.includes('blog')}>
                Blog
            </Menu.Item>*/}
        </Menu.Menu>
    </Menu>

const NavWithRouter = withRouter(Nav)

export default NavWithRouter