import React, { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputText from '../Input/Input';
import GussesList from '../GussesList/GussesList';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Keyboard from '../Keyboard';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  console.info({ answer });

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

  function handleReset() {
    const newAnswer = sample(WORDS)
    setGameStatus('running');
    setItems([]);
    setAnswer(newAnswer)
  }

  const validatedGuesses = items.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <button className='restart-button' onClick={handleReset} >Reset</button>
      <GussesList validatedGuesses={validatedGuesses} answer={answer} />
      <InputText status={gameStatus} handleAddItem={handleAddItem} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus !== 'running' && <Banner answer={answer} status={gameStatus} counter={items.length}></Banner>}
    </>
  );
}

export default Game;
