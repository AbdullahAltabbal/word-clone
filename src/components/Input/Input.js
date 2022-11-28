import React, { useState } from "react";

function InputText({ handleAddItem }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleAddItem(inputValue);
    console.log('Input: ', inputValue);
    setInputValue('')
  }

  const handleChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      value={inputValue}
      onChange={handleChange}
      maxLength={5} id="guess-input" type="text" />
  </form>;
}

export default InputText;
