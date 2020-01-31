import React from 'react';
import GlobalStyle from '../../styles';
import Content from './styles';
import Toolbar from '../Navigation/Toolbar';

const layout = (props) => (
  <>
    <Toolbar />
    <GlobalStyle />
    <Content>
      {props.children}  
    </Content>
  </>
);

export default layout;