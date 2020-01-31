import React from 'react';
import Button from './styles';

const button = (props) => (
  <Button onClick={props.clicked} type={props.type}>
    {props.children}
  </Button>
);

export default button;