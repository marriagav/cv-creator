import InputSection from "./components/InputSection/InputSection";
import OutputSection from "./components/OutputSection/OutputSection";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import useCvOutputValues from "./components/OutputSection/hooks/useCvOutputValues";

function App() {
  const { data, addValue } = useCvOutputValues();

  const handleChange = (response: dataResponse) => {
    addValue(response);
  };

  return (
    <div className="App">
      <NavBar className="navBar" title="CV Creator"></NavBar>
      <main>
        <InputSection
          className="inputSection"
          onInputChange={handleChange}
        ></InputSection>
        <OutputSection data={data} className="outputSection"></OutputSection>
      </main>
    </div>
  );
}

export default App;
