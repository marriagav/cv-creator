import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface OutputSectionProps {
  className: string;
  data: outputData;
}

function OutputSection(props: OutputSectionProps) {
  const values = (subSection: dataSubSection) => {
    return subSection.values.map((value) => {
      return (
        <p
          key={uuidv4()}
          className={`outputValue${value.placeholder.replace(" ", "")}`}
        >
          {value.value}
        </p>
      );
    });
  };
  const subSections = (section: dataSection) =>
    section.subSections.map((subSection) => {
      return (
        <div
          key={uuidv4()}
          className={`subSection${section.title.replace(" ", "")}`}
        >
          {values(subSection)}
        </div>
      );
    });
  const sections = props.data.sections.map((section) => {
    return (
      <div
        className={`outputSection${section.title.replace(" ", "")}`}
        key={uuidv4()}
      >
        <>
          <h2 className={`outputHeader${section.title.replace(" ", "")}`}>
            {section.title}
          </h2>
          {subSections(section)}
        </>
      </div>
    );
  });
  return (
    <div className={props.className}>
      {/* <div className="cVTopBar"></div> */}
      {sections}
    </div>
  );
}

export default OutputSection;
