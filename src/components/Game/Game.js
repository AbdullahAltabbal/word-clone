import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import InputText from '../Input/Input';
import GussesList from '../GussesList/GussesList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(inputValue) {
    const newItem = inputValue
    const nextItems = [...items, newItem];
    setItems(nextItems);
  }


  return <>
    <GussesList items={items}></GussesList>
    <InputText handleAddItem={handleAddItem}></InputText>
  </>;
}

export default Game;
