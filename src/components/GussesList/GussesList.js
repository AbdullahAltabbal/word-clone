import React from "react";
import Guess from "../Guess/Guess";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from "../../utils";


function GussesList({ items }) {
  return <>
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess value={items[number]} key={number} />))}
    </div>
  </>;
}

export default GussesList;
