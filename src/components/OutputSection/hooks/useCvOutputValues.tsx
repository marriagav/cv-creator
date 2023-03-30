import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  personalInfoPlaceholders,
  experiencePlaceholders,
  educationPlaceholders,
} from "../../../constants";

function dataValue(placeholder: string, value: string): dataValue {
  return { placeholder: placeholder, value: value };
}

const personalInfoDataSubsection: dataSubSection = {
  subIndex: 0,
  values: personalInfoPlaceholders.map((placeholder) => {
    return dataValue(placeholder, "");
  }),
};

const experienceDataSubsection: dataSubSection = {
  subIndex: 0,
  values: experiencePlaceholders.map((placeholder) => {
    return dataValue(placeholder, "");
  }),
};

const educationDataSubsection: dataSubSection = {
  subIndex: 0,
  values: educationPlaceholders.map((placeholder) => {
    return dataValue(placeholder, "");
  }),
};

const personalDataSection: dataSection = {
  title: "Personal Details",
  subSections: [personalInfoDataSubsection],
};

const experienceDataSection: dataSection = {
  title: "Experience",
  subSections: [experienceDataSubsection],
};

const educationDataSection: dataSection = {
  title: "Education",
  subSections: [educationDataSubsection],
};

const sectionMaps = [
  personalInfoPlaceholders,
  experiencePlaceholders,
  educationPlaceholders,
];

const outputDataObject: outputData = {
  sections: [personalDataSection, experienceDataSection, educationDataSection],
};

function useCvOutputValues() {
  const [data, setData] = useState<outputData>(outputDataObject);

  function addValue(response: dataResponse) {
    setData((data) => {
      if (
        data.sections[response.index].subSections.length - 1 >=
        response.subIndex
      ) {
        data.sections[response.index].subSections[response.subIndex].values =
          data.sections[response.index].subSections[
            response.subIndex
          ].values.map((value) => {
            if (value.placeholder == response.placeholder) {
              value.value = response.value;
            }
            return value;
          });
        return Object.assign({}, data);
      } else {
        data.sections[response.index].subSections.push({
          subIndex: response.subIndex,
          values: sectionMaps[response.index].map((placeholder) => {
            if (placeholder == response.placeholder) {
              return dataValue(placeholder, response.value);
            } else {
              return dataValue(placeholder, "");
            }
          }),
        });
        return Object.assign({}, data);
      }
    });
  }
  return { data, addValue };
}

export default useCvOutputValues;
