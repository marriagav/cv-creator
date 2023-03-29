import React from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar className="navBar" title="CV Creator"></NavBar>
      <main>
        <InputSection className="inputSection"></InputSection>
        <OutputSection className="outputSection"></OutputSection>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
