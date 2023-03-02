import React, { useEffect, useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from "axios"

const App = () => {
  const [showModal, setShowModal] = useState(null)
  const [inputLanguage, setInputLanguage] = useState("English")
  const [outputLanguage, setOutputLanguage] = useState("Spanish")
  const [languages, setLanguages] = useState(null)

  const getLanguages = () => {

    const options = {
      method: "GET",
      url: "https://g-translate1.p.rapidapi.com/languages",
      headers: {
        "X-RapidAPI-Key": "4dacad5a75msh75dcb058db2a252p1e46c9jsn2b4e47070888",
        "X-RapidAPI-Host": "g-translate1.p.rapidapi.com",
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        const arrayOfData = Object.keys(response.data.data).map(key=> response.data.data[key])
        setLanguages(arrayOfData)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  console.log('languages', languages)

  useEffect(()=> {
    getLanguages()
  }, [])

  const handleClick = () => {
    setInputLanguage(outputLanguage)
    setOutputLanguage(inputLanguage)
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style="input"
            setShowModal={setShowModal}
          />

          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>

          <TextBox
            selectedLanguage={outputLanguage}
            style="output"
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}

export default App;
