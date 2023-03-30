import React from "react";
import CvSection from "./CvSection";
import useCvSectionList from "./hooks/useCvSectionList";
import "../../styles/styles.css";

interface InputSectionProps {
  className: string;
  onInputChange: Function;
}

function InputSection(props: InputSectionProps) {
  const { cvSectionList, addCvSection } = useCvSectionList();

  let cvSections = cvSectionList?.map((cvSection) => {
    return (
      <CvSection
        className="CvSection"
        cvSection={cvSection}
        onInputChange={props.onInputChange}
        key={cvSection.key}
      ></CvSection>
    );
  });

  return <div className={props.className}>{cvSections}</div>;
}

export default InputSection;
