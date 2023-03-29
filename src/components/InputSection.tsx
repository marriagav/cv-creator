import React from "react";
import CvSection from "./CvSection";
import useCvSectionList from "../hooks/useCvSectionList";
import "../styles/styles.css";

interface InputSectionProps {
  className: string;
}

function InputSection(props: InputSectionProps) {
  const { cvSectionList, addCvSection } = useCvSectionList();

  let cvSections = cvSectionList?.map((cvSection) => {
    return (
      <CvSection
        className="CvSection"
        sectionHeader={cvSection.sectionHeader}
        hasDeleteButton={cvSection.hasDeleteButton}
        hasAddButton={cvSection.hasAddButton}
        sectionInputs={cvSection.sectionInputs}
        key={cvSection.key}
      ></CvSection>
    );
  });

  return <div className={props.className}>{cvSections}</div>;
}

export default InputSection;
