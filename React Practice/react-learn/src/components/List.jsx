/* eslint-disable no-unused-vars */
import React from 'react';
import Fruit from '../misc_component/Fruit';

const List = () => {
  const fruits = [
    {id: 1, name: 'Apple', price: 45, emoji: '🍎'},
    {id: 2, name: 'Banana', price: 24, emoji: '🍌'},
    {id: 3, name: 'Orange', price: 33, emoji: '🍊'},
    {id: 4, name: 'Pineapple', price: 70, emoji: '🍍'},
    {id: 5, name: 'Grape', price: 28, emoji: '🍇'},
  ];
  const listOfFruit = fruits.map (fruit => (
    <li key={fruit.id}>
      <Fruit emoji={fruit.emoji} price={fruit.price} name={fruit.name} />
    </li>
  ));

  return (
    <div>
      <ul style={{listStyle: 'none'}}>{listOfFruit}</ul>
    </div>
  );
};

export default List;
