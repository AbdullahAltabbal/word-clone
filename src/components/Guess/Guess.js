import React, { useState } from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

const Cell = ({ letter, status }) => {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map(number =>
        <Cell
          key={number}
          status={result ? result[number].status : undefined}
          letter={result ? result[number].letter : undefined}>
        </Cell>
      )}
    </p>
  )
}

export default Guess;
