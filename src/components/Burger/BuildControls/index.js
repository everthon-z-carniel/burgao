import React from 'react';
import BuildControl from './BuildControl';
import { Controls, BtnOrder } from './styles'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <Controls>
      <p>Total price: ${props.price.toFixed(2)}</p>
      {controls.map((ctrl, index) => {
        return (
          <BuildControl 
            key={ctrl.label}             
            label={ctrl.label} 
            type={ctrl.type}
            ingredients={props.ingredients}
            added={() => props.ingredientAdded(ctrl.type)} 
            removed={() => props.ingredientRemoved(ctrl.type)}
          />
        )
      })}
      <BtnOrder disabled={!props.purchasable}>ORDER NOW</BtnOrder>
    </Controls>
);

export default buildControls;