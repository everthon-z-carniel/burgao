import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => value);

const SortableList = SortableContainer(({ingredients}) => {
  const list = ingredients.map((value, index) => (
    <div key={`item-${value.key}`}>
      <SortableItem key={`item-${value.key}`} index={index} value={value} />
    </div>
  ));
  return list;
});

export default SortableList;