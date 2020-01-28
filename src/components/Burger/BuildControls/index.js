import React from 'react';
import Controls from './styles'
import BuildControl from './BuildControl/index';
import _ from 'lodash';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <Controls>
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
  </Controls>
);

export default buildControls;