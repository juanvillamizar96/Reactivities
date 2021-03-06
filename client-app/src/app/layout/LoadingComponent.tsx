import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent: React.FC<{ inverted?: boolean; content?: string }> = ({
  inverted = false,
  content,
}) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
      <img src='../../assets/spinner.gif' alt='loading' />
    </Dimmer>
  );
};

export default LoadingComponent;
