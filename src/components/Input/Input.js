import React, { useState } from "react";

function InputText({ handleAddItem, status }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue.length !== 5) window.alert('please enter a word with 5 letters! ^^')

    handleAddItem(inputValue);
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
      maxLength={5} minLength={5} id="guess-input" type="text" disabled={status !== 'running'} />
  </form>;
}

export default InputText;
