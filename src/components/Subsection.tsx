import React, { useState } from "react";
import TextInput from "./TextInput";
import { v4 as uuidv4 } from "uuid";

interface SubsectionProps {
  className: string;
  subSection: subSection;
  onDeleteButton(event: React.MouseEvent, subsectionId: string): void;
  hasDeleteButton: boolean;
  onInputChange: Function;
  cvSection: cvSection;
}

function Subsection(props: SubsectionProps) {
  const [inputFields, setInputFields] = useState<JSX.Element[]>(
    props.subSection.sectionInputs.map((input) => {
      return (
        <TextInput
          cvSection={props.cvSection}
          subSection={props.subSection}
          onInputChange={props.onInputChange}
          className="textInput"
          placeholder={input.placeholder}
          key={uuidv4()}
        />
      );
    })
  );

  return (
    <div className={props.className}>
      {inputFields}
      {props.hasDeleteButton && (
        <button
          className="generalButton"
          onClick={(e) => {
            props.onDeleteButton(e, props.subSection.key);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default Subsection;
