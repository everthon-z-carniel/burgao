import React, { Component } from 'react';
import arrayMove from 'array-move';
import Burger from '../../components/Burger/styles';
import Ingredient from '../../components/Burger/Ingredient';
import BuildControls from '../../components/Burger/BuildControls/index';

import SortableIngredients from '../../hoc/SortableIngredients';
import _ from 'lodash';

const PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    ingredientsList: [],
    totalPrice: 4
  }

  handleSortEnd = ({ oldIndex, newIndex }) => {
    const { ingredientsList } = this.state;
    
    if (ingredientsList[oldIndex]) {
      this.setState({
        ingredientsList: arrayMove(ingredientsList, oldIndex, newIndex),
      });
    }
  };
 
  addIngredientHandler = (type) => {
    const { ingredients, ingredientsList, totalPrice } = this.state;

    if(ingredients[type] < 3) {
      const updatedIngredients = {
        ...ingredients
      }

      updatedIngredients[type] = ingredients[type] + 1;

      const _ingredient = {
        id: `${type}-${updatedIngredients[type]}`,
        type,
      };

      const ingredient = <Ingredient key={_ingredient.id} type={_ingredient.type} />

      const updatedIngredientsList = [...ingredientsList];
      updatedIngredientsList.push(ingredient);


      this.setState({
        totalPrice: totalPrice + PRICES[type],
        ingredients: updatedIngredients,
        ingredientsList: updatedIngredientsList,
      })
    }
  }

  removeIngredientHandler = (type) => {
    let { ingredients, ingredientsList, totalPrice } = this.state;
    
    if(ingredients[type]) {
      const updatedIngredients = {
        ...ingredients
      }
      const ingredient = _.find(ingredientsList, { key: `${type}-${ingredients[type]}` });
      
      const idxIng = _.indexOf(ingredientsList, ingredient);

      updatedIngredients[type] = ingredients[type] - 1;

      const updatedIngredientsList = [...ingredientsList];
      updatedIngredientsList.splice(idxIng, 1);

      this.setState({ 
        totalPrice: totalPrice - PRICES[type],
        ingredients: updatedIngredients,
        ingredientsList: updatedIngredientsList,
      })
  }}

  render() {
    const { ingredientsList } = this.state;
    return (
      <>
        <Burger>
          <Ingredient type="bread-top" />
            <div>
              <SortableIngredients
                ingredients={this.state.ingredientsList}
                onSortEnd={this.handleSortEnd}
              />
            </div>
          <Ingredient type="bread-bottom" />
        </Burger>
        <BuildControls
          ingredients={ingredientsList}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} 
        />
      </>
    );
  }
}

export default BurgerBuilder;