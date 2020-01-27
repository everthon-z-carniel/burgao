import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Meat,
  Cheese,
  Salad,
  Seeds2,
  Bacon
} from './styles';


class Ingredient extends Component {
  render () {
    switch (this.props.type) {
      case 'bread-bottom':
        return <BreadBottom />;
      case 'bread-top':
        return (
          <BreadTop>
            <Seeds1 />
            <Seeds2 />
          </BreadTop>
        );
      case 'meat':
        return <Meat />;
      case 'cheese':
        return <Cheese />;
      case 'salad':
        return <Salad />;  
      case 'bacon':
        return <Bacon />;
      default:
        return ;
    }
  } 
}

Ingredient.propTypes = {
 type: PropTypes.string.isRequired
};

export default Ingredient;