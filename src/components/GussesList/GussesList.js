import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from "../../utils";


function GussesList({ validatedGuesses, answer }) {
  return <>
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess answer={answer} value={validatedGuesses[number]} key={number} />))}
    </div>
  </>;
}

export default GussesList;
