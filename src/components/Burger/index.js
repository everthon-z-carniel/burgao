import _ from 'lodash';
import React from 'react';
import Burger from './styles'
import Ingredient from './Ingredient'
import SortableIngredients from '../../hoc/SortableIngredients';

const burger = (props) => {
  const { ingredientsList, onSortEnd } = props;
  const newIngredients = _.map(ingredientsList, (ingredient) => {
    return (
      <Ingredient key={ingredient.id} type={ingredient.type} />
    )
  })

  return (
    <Burger>
      <Ingredient type="bread-top" />
      
        {newIngredients.length ? (
          // <SortableIngredients
          //   ingredients={newIngredients}
          //   onSortEnd={onSortEnd}
          // />
          newIngredients
        ) : (
          <p> Please start adding ingredients! </p>
        )}
      <Ingredient type="bread-bottom" />
    </Burger>
  );
};

export default burger;