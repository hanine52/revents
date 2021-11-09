import React, { useState } from 'react';
import { Button, Container, Menu } from "semantic-ui-react";

import { NavLink, useHistory } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';





export default function NavBar({ setFormOpen }) {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);
  
    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }
  
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name='Events' />
          {authenticated && (
            <Menu.Item as={NavLink} to='/createEvent'>
              <Button positive inverted content='Create Event' />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu signOut={handleSignOut} />
          ) : (
            <SignedOutMenu setAuthenticated={setAuthenticated} />
          )}
        </Container>
      </Menu>
    );
  }
/*
export default function NavBar({setFormOpen}) {
  return (
    <Menu inverted>
        <Container>
      <Menu.Item as={NavLink} exact to='/' header>
        <img src='/assets/logo.png' alt='logo' style={{marginRight:15}}/> Re-vents
      </Menu.Item>
      <Menu.Item as={NavLink} to='/events' name='Events' style={{textColor: 'white'}}></Menu.Item>
      <Menu.Item as={NavLink} to='/createEvent'>
        <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event'></Button>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Button basic inverted >
            Login
          </Button>
          <Button basic inverted style={{ marginLeft: "0.5em" }}>
            Register
          </Button>
        </Menu.Item>
      </Menu.Menu>
      </Container>
    </Menu>
  );
}
*/