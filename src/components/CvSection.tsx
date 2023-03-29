import React, { useState } from "react";
import Subsection from "./Subsection";
import useSubsectionList from "../hooks/useSubSectionList";
import { v4 as uuidv4 } from "uuid";

interface CvSectionProps {
  className: string;
  sectionHeader: string;
  hasAddButton: boolean;
  hasDeleteButton: boolean;
  sectionInputs: textInput[];
}

function CvSection(props: CvSectionProps) {
  const { subSectionList, addSubsection, deleteSubsection } = useSubsectionList(
    [
      {
        key: uuidv4(),
        sectionInputs: props.sectionInputs,
      },
    ]
  );

  function removeSubSection(event: React.MouseEvent, subsectionId: string) {
    deleteSubsection(subsectionId);
  }

  function createSubSection(event: React.MouseEvent) {
    const generatedId = uuidv4();
    console.log(generatedId);
    addSubsection(props.sectionInputs, uuidv4());
  }

  let subSections = subSectionList.map((subSection) => {
    return (
      <Subsection
        className="subSection"
        subSection={subSection}
        onDeleteButton={removeSubSection}
        hasDeleteButton={props.hasDeleteButton}
        key={subSection.key}
      ></Subsection>
    );
  });

  return (
    <div className={props.className}>
      <h2>{props.sectionHeader}</h2>
      {subSections}
      {props.hasAddButton && (
        <button className="generalButton" onClick={createSubSection}>
          Add
        </button>
      )}
    </div>
  );
}

export default CvSection;
