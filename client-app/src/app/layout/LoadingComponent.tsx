import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent: React.FC<{ inverted?: boolean; content?: string }> = ({
  inverted = true,
  content,
}) => {
  return (
    <Dimmer active inverted={inverted}>
      <img src='../../assets/spinner.gif' alt='loading' />
      <Loader content={content}></Loader>
    </Dimmer>
  );
};

export default LoadingComponent;
