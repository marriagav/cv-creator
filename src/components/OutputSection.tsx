import React from "react";

interface OutputSectionProps {
  className: string;
}

function OutputSection(props: OutputSectionProps) {
  return <div className={props.className}></div>;
}

export default OutputSection;
