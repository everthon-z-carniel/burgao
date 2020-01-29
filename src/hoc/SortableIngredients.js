import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => (
  <div style={{ margin: '0x', cursor: 'grab'}}>
    {value}
  </div>
));

const SortableList = SortableContainer(({ingredients, onSortEnd}) => (
  <div style={{ 
    display:'flex',
    flexDirection: 'column',
    width: '100%'
  }}>
    {ingredients.map((item, index) => (
        <SortableItem
          key={index}
          index={index}
          value={item}
          onSortEnd={onSortEnd}
        />
      )
    )}
  </div>
))

export default SortableList;