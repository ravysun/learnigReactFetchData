import React from 'react';
import ListItem from './ListItem';

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default List;
