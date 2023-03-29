import React, { useState } from "react";

function useSubsectionList(subSection: subSection[]) {
  const [subSectionList, setSubsections] = useState<subSection[]>(subSection);

  function addSubsection(subSectionInputs: textInput[], key: string) {
    const subSection = {} as subSection;
    subSection.sectionInputs = subSectionInputs;
    subSection.key = key;
    setSubsections(subSectionList?.concat(subSection));
  }
  function deleteSubsection(subsectionKey: string) {
    setSubsections(
      subSectionList.filter((subsection) => {
        if (subsection.key == subsectionKey) {
          return false;
        }
        return true;
      })
    );
  }
  return { subSectionList, addSubsection, deleteSubsection };
}

export default useSubsectionList;
