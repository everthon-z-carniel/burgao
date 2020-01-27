import React from 'react';
import GlobalStyle from '../../styles';
import Content from './styles';


const layout = (props) => (
  <>
    <GlobalStyle />
    <Content>
      {props.children}  
    </Content>
  </>
);

export default layout;