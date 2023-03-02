import React, { useState } from "react"
import TextBox from "./components/TextBox"
import Arrows from "./components/Arrows"
import Button from "./components/Button"
import Modal from "./components/Modal"

const App = () => {

  const [inputLanguage, setInputLanguage] = useState('English')
  const [outputLanguage, setOutputLanguage] = useState('Spanish')

const handleClick = () => {
  setInputLanguage(outputLanguage)
  setOutputLanguage(inputLanguage)
}

  return (
    <div className="App">
      <>
      <TextBox 
      selectedLanguage = {inputLanguage}
      style="input"/>
      <div className="arrow-container" onClick={handleClick}>
        <Arrows/>
      </div>
      <TextBox 
      selectedLanguage = {outputLanguage}
      style="output"/>
      </>
    </div>
  );
}

export default App;
