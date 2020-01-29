import React from 'react';
import Modal from './style';

const modal = (props) => (
  <Modal>
      {props.children}
  </Modal>
);

export default modal;