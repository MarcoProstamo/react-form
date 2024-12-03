import { useState } from "react";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header />
      <hr />
      <Main
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
    </>
  );
}

export default App;
