import React from "react";

function Banner({ gussesNumber, status, answer }) {
  const className = status === 'won' ? 'happy banner' : 'sad banner';

  return (
    <div className={className}>
      {status === 'won' ? <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {gussesNumber === 1 ? '1 guess' : `${gussesNumber} guesses`}</strong>.
      </p> : status === 'lost' ?
        <p> sorry, the correct answer is <strong>{answer} </strong></p> : null
      }
    </div>
  )
}

export default Banner;
