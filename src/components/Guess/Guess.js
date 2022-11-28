import React from "react";
import { range } from "../../utils";


function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map(number =>
        <span key={number} className="cell">{value ? value[number] : null}</span>
      )}
    </p>
  )
}

export default Guess;
