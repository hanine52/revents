import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar({setFormOpen}) {
  return (
    <Menu inverted>
        <Container>
      <Menu.Item>
        <img src='/assets/logo.png' alt='logo' style={{marginRight:15}}/> Re-vents
      </Menu.Item>
      <Menu.Item name='Events' style={{textColor: 'white'}}></Menu.Item>
      <Menu.Item>
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
