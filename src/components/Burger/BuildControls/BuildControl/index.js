import React from 'react';
import {
  Control,
  BtnControl,
  Label
} from './styles';

const buildControl = (props) => {
  return (
    <Control>
      <Label>{props.label}</Label>
      <BtnControl type="less" onClick={props.removed}>Less</BtnControl>
      <BtnControl type="more" onClick={props.added}>More</BtnControl>
    </Control>
  )
}

export default buildControl;