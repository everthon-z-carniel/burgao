import React from 'react';
import Controls from './styles'
import BuildControl from './BuildControl/index';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <Controls>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label}             
        label={ctrl.label} 
        type={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)} 
        removed={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
  </Controls>
);

export default buildControls;