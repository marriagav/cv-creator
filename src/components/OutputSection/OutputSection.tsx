import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface OutputSectionProps {
  className: string;
  data: outputData;
}

function OutputSection(props: OutputSectionProps) {
  // const sectionsMap = {
  //   "Personal Details": personalDetails,
  //   Experience: values,
  // };

  let sectionsMap = new Map<string, Function>([
    ["Personal Details", personalDetails],
    ["Experience", experience],
    ["Education", education],
  ]);

  function personalDetails(subSection: dataSubSection) {
    return (
      <div className="personalDetails">
        <div className="personalTopBar">
          <h2>{`${subSection.values[0].value} ${subSection.values[1].value}`}</h2>
          <h3>{`${subSection.values[2].value}`}</h3>
          <div>
            <p>{`${subSection.values[3].value}`}</p>
            <p>{`${subSection.values[4].value}`}</p>
            <p>{`${subSection.values[5].value}`}</p>
          </div>
        </div>
        <p>{`${subSection.values[6].value}`}</p>
      </div>
    );
  }

  function experience(subSection: dataSubSection) {
    return (
      <div className="experienceEducationOutput">
        <h3>{`${subSection.values[3].value} - ${subSection.values[4].value}`}</h3>
        <div>
          <h3>{`${subSection.values[0].value}`}</h3>
          <p>{`${subSection.values[1].value} - ${subSection.values[2].value}`}</p>
        </div>
      </div>
    );
  }

  function education(subSection: dataSubSection) {
    return (
      <div className="experienceEducationOutput">
        <h3>{`${subSection.values[4].value} - ${subSection.values[5].value}`}</h3>
        <div>
          <h3>{`${subSection.values[0].value}`}</h3>
          <p>{`${subSection.values[1].value}`}</p>
          <p>{`${subSection.values[2].value} - ${subSection.values[3].value}`}</p>
        </div>
      </div>
    );
  }

  function values(subSection: dataSubSection) {
    return subSection.values.map((value) => {
      // if (value.placeholder == "From") {
      //   return (
      //     <p
      //       key={uuidv4()}
      //       className={`outputValue${value.placeholder.replace(" ", "")}`}
      //     >
      //       {`${value.value} - `}
      //     </p>
      //   );
      // }
      return (
        <p
          key={uuidv4()}
          className={`outputValue${value.placeholder.replace(" ", "")}`}
        >
          {value.value}
        </p>
      );
    });
  }
  const subSections = (section: dataSection) =>
    section.subSections.map((subSection) => {
      return (
        <div
          key={uuidv4()}
          className={`subSection${section.title.replace(" ", "")}`}
        >
          {sectionsMap.get(section.title)?.(subSection)}
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
          {section.title != "Personal Details" && (
            <h2 className={`outputHeader${section.title.replace(" ", "")}`}>
              {section.title}
            </h2>
          )}
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
