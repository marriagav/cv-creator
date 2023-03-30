import React, { useState } from "react";

interface TextInputProps {
  className: string;
  placeholder: string;
  subSection: subSection;
  onInputChange: Function;
  cvSection: cvSection;
  key: string;
}

function TextInput(props: TextInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    props.onInputChange({
      title: props.cvSection.sectionHeader,
      index: props.cvSection.sectionIndex,
      subIndex: props.subSection.index,
      placeholder: props.placeholder,
      value: newValue,
    } as dataResponse);
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
