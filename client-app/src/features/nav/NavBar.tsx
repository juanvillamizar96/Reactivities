import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

interface IProps {
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button onClick={openCreateForm} positive content='Create Activity' />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
