"use client";
import React, { useState } from "react";

const Input = ({ onSubmit = () => {}, handleRemove = () => {} }: { onSubmit: (name: string | null) => any; handleRemove: (name: string) => any }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const onKeyChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputText !== "") {
      onSubmit(inputText);
      setInputText("");
    }
    if (event.key === "Backspace" && inputText === "") {
      handleRemove(inputText);
    }
  };

  return <input value={inputText} type="text" className="outline-none border-none flex-1" onChange={handleChange} onKeyDown={onKeyChange} />;
};

export default Input;
