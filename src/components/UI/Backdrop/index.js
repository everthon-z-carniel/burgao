import React from 'react';
import Backdrop from './styles';

const backdrop = (props) => (
  props.show ? <Backdrop onClick={props.clicked} /> : null
);

export default backdrop;