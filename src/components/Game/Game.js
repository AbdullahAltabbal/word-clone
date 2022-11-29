import React, { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputText from '../Input/Input';
import GussesList from '../GussesList/GussesList';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [items, setItems] = React.useState([]);
  const [gameStatus, setGameStatus] = useState('running');

  function handleAddItem(inputValue) {
    const nextItems = [...items, inputValue];
    setItems(nextItems);

    if (inputValue.toUpperCase() === answer) {
      setGameStatus('won')
    }
    else if (nextItems.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GussesList answer={answer} items={items} />
      <InputText status={gameStatus} handleAddItem={handleAddItem} />
      {gameStatus !== 'running' && <Banner answer={answer} status={gameStatus} counter={items.length}></Banner>}
    </>
  );
}

export default Game;
