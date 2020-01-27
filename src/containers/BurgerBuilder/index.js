import React, { Component } from "react";
import arrayMove from "array-move";

import Burger from '../../components/Burger/index'
import BuildControls from '../../components/Burger/BuildControls/index';

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

  handleSortEnd = ({oldIndex, newIndex}) => {
    let ingredientsList = [...this.state.ingredientsList];

    this.setState({
      ingredientsList: arrayMove(ingredientsList, oldIndex, newIndex)
    });
  };
 
  addIngredientHandler = (type) => {
    const { ingredients, ingredientsList } = this.state;
    const { totalPrice } = this.state;

    if(ingredients[type] < 3) {
      const updatedIngredients = {
        ...ingredients
      }

      updatedIngredients[type] = ingredients[type] + 1;
      const ingredient = {
        id: `${type}-${updatedIngredients[type]}`,
        type,
      };

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
    const { ingredients, totalPrice } = this.state;
    
    if (ingredients[type]) {
      const updatedIngredients = {
        ...ingredients
      }
      updatedIngredients[type] = ingredients[type] - 1;
      
      this.setState({
        totalPrice: totalPrice - PRICES[type],
        ingredients: updatedIngredients,
      })
    }
  }  

  render() {
    return (
      <>
        <Burger
          ingredientsList={this.state.ingredientsList}
          onSortEnd={this.handleSortEnd}
        />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} 
        />
      </>
    );
  }
}

export default BurgerBuilder;