import React from 'react';
import { Segment, Button, Header, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='search' />
        Oops - we've looked everywhere but couldn't find this.
      </Header>
      <Segment.Inline>
        <Button as={Link} to='/activities' primary>
          Return to Activities page
        </Button>
      </Segment.Inline>
      <h1></h1>
      <img src='../../assets/spinner.gif' alt='loading' />
    </Segment>
  );
};

export default NotFound;
