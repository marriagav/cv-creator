import React, { useState } from "react";
import Subsection from "./Subsection";
import useSubsectionList from "../hooks/useSubSectionList";
import { v4 as uuidv4 } from "uuid";

interface CvSectionProps {
  className: string;
  cvSection: cvSection;
  onInputChange: Function;
}

function CvSection(props: CvSectionProps) {
  const { subSectionList, addSubsection, deleteSubsection } = useSubsectionList(
    [
      {
        key: uuidv4(),
        sectionInputs: props.cvSection.sectionInputs,
        index: 0,
      },
    ]
  );

  function removeSubSection(event: React.MouseEvent, subsectionId: string) {
    deleteSubsection(subsectionId);
  }

  function createSubSection(event: React.MouseEvent) {
    addSubsection(props.cvSection.sectionInputs, uuidv4());
  }

  let subSections = subSectionList.map((subSection) => {
    return (
      <Subsection
        onInputChange={props.onInputChange}
        className="subSection"
        subSection={subSection}
        onDeleteButton={removeSubSection}
        hasDeleteButton={props.cvSection.hasDeleteButton}
        key={subSection.key}
        cvSection={props.cvSection}
      ></Subsection>
    );
  });

  return (
    <div className={props.className}>
      <h2>{props.cvSection.sectionHeader}</h2>
      {subSections}
      {props.cvSection.hasAddButton && (
        <button className="generalButton" onClick={createSubSection}>
          Add
        </button>
      )}
    </div>
  );
}

export default CvSection;
