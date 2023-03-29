import React, { useState } from "react";

interface TextInputProps {
  className: string;
  value: string;
  placeholder: string;
  // setInputFields: Function;
}

function TextInput(props: TextInputProps) {
  const [inputValue, setInputValue] = useState(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <input
      type="text"
      className={props.className}
      placeholder={props.placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export default TextInput;
