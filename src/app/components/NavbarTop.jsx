import React from 'react'
import { Menu, Container, Dropdown } from 'semantic-ui-react'

const NavbarTop = () => (
    <div style={{ marginBottom: '5em' }}>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>Everplan</Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item as='a'>Calendar</Menu.Item>
                    <Dropdown item simple text='Profile'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Contacts</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item>Quit</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Container>
        </Menu>
    </div>
);

export default NavbarTop