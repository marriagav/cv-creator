import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function createTextInput(placeholder: string, value: string): textInput {
  return { placeholder: placeholder, value: "" };
}

const personalInfoPlaceholders = [
  "First name",
  "Last name",
  "Title",
  "Address",
  "Phone number",
  "Email",
  "Description",
];

const experiencePlaceholders = ["Position", "Company", "City", "From", "To"];

const educationPlaceholders = [
  "University name",
  "City",
  "Degree",
  "Subject",
  "From",
  "To",
];

const personalInfoInputs: textInput[] = personalInfoPlaceholders.map(
  (placeholder: string) => {
    return createTextInput(placeholder, "");
  }
);

const experienceInputs: textInput[] = experiencePlaceholders.map(
  (placeholder: string) => {
    return createTextInput(placeholder, "");
  }
);

const educationInputs: textInput[] = educationPlaceholders.map(
  (placeholder: string) => {
    return createTextInput(placeholder, "");
  }
);

const educationCVSection: cvSection = {
  sectionHeader: "Education",
  sectionInputs: educationInputs,
  hasDeleteButton: true,
  hasAddButton: true,
  key: uuidv4(),
};

const experienceCVSection: cvSection = {
  sectionHeader: "Experience",
  sectionInputs: experienceInputs,
  hasDeleteButton: true,
  hasAddButton: true,
  key: uuidv4(),
};

const infoCVSection: cvSection = {
  sectionHeader: "Personal Information",
  sectionInputs: personalInfoInputs,
  hasDeleteButton: false,
  hasAddButton: false,
  key: uuidv4(),
};

function useCvSectionList() {
  const [cvSectionList, setCvSections] = useState<cvSection[]>([
    infoCVSection,
    experienceCVSection,
    educationCVSection,
  ]);

  function addCvSection(cvSection: cvSection) {
    setCvSections(cvSectionList?.concat(cvSection));
  }
  return { cvSectionList, addCvSection };
}

export default useCvSectionList;
