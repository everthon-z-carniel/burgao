import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => (
  <div style={{ cursor: 'grab' , width: '140%', height: '20px'}}>
    {value}
  </div>
));

const SortableList = SortableContainer(({ingredients, onSortEnd}) => (
  <div>
    {ingredients.map((item, index) => (
        <SortableItem
          index={index}
          value={item}
          onSortEnd={onSortEnd}
        />
      )
    )}
  </div>
))

export default SortableList;