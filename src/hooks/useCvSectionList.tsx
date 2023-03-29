import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useCvSectionList(svSectionList: cvSection[]) {
  const [cvSectionList, setCvSections] = useState<cvSection[]>(svSectionList);

  function addCvSection(cvSection: cvSection) {
    setCvSections(cvSectionList?.concat(cvSection));
  }
  return { cvSectionList, addCvSection };
}

export default useCvSectionList;
