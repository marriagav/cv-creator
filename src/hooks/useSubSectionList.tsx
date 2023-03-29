import React, { useState } from "react";

function useSubsectionList(subSection: subSection[]) {
  const [subSectionList, setSubsections] = useState<subSection[]>(subSection);
  const [index, setIndex] = useState(1);

  function addSubsection(subSectionInputs: textInput[], key: string) {
    const subSection = {} as subSection;
    subSection.sectionInputs = subSectionInputs;
    subSection.key = key;
    subSection.index = index;
    setIndex(index + 1);
    setSubsections(subSectionList?.concat(subSection));
  }
  function deleteSubsection(subsectionKey: string) {
    let found = false;
    setSubsections(
      subSectionList.filter((subsection) => {
        if (subsection.key == subsectionKey) {
          found = true;
          return false;
        }
        if (found) {
          subsection.index -= 1;
        }
        return true;
      })
    );
    setIndex(subSectionList.length - 1);
  }
  return { subSectionList, addSubsection, deleteSubsection };
}

export default useSubsectionList;
