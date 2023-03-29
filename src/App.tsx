import React from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import NavBar from "./components/NavBar";

function App() {
  const handleChange = (response: {
    title: string;
    index: number;
    subIndex: number;
    placeholder: string;
    value: string;
  }) => {
    console.log(response);
  };
  return (
    <div className="App">
      <NavBar className="navBar" title="CV Creator"></NavBar>
      <main>
        <InputSection
          className="inputSection"
          onInputChange={handleChange}
        ></InputSection>
        <OutputSection className="outputSection"></OutputSection>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
