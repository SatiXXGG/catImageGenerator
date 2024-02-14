import { useState, useEffect, useTransition } from 'react'
import './App.css'
import UtilButton from "./UtilButton.jsx"

const apiKey = "live_Uc2nUcysU3czvBtewZyf53BHtN5VZqDdhMExuMYXbSdHU1kaJ26CnQcdVUsg06YB"

function App() {

  const [currentImage, setImage] = useState()
  const [currentFact, setFact] = useState("Click on GENERATE CAT FACT to generate a cat fact!")

  async function getCatImage() {
    await fetch('https://api.thecatapi.com/v1/images/search?api_key=' + apiKey).then(response => response.json()).then((response) => {
      setImage(response[0].url)
    })
  }

  async function getDogImage() {
    await fetch('https://api.thedogapi.com/v1/images/search?api_key=' + apiKey).then(response => response.json()).then((response) => {
      setImage(response[0].url)
    })
  }

  async function generateFact() {
    await fetch('https://catfact.ninja/fact').then(response => response.json()).then((response) => {
      setFact(response.fact)
    })
  }


  return (
    <>
      <header>
        <h1 className='font-bold text-4xl'>THE ANIMALS GENERATOR</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 grid-rows-1 my-12 place-items-stretch '>

          {UtilButton(function () {
            getCatImage()
            let image = document.querySelectorAll("#currentImage")
            image.src = currentImage

          }, "GENERATE CAT")}

          {UtilButton(function () {
            getDogImage()
            const image = document.querySelectorAll("#currentImage")
            image.src = currentImage
          }, "GENERATE DOG")}

          {UtilButton(function () {
            generateFact()
            const catText = document.getElementById("currentFact")
            const factDiv = document.getElementById("catFactDiv")

            factDiv.style.visibility = "visible"


            catText.innerHTML = currentFact
          }, "GENERATE CAT FACT")}


        </div>
      </header>

      <div className='from-pink-500 to-cyan-500 bg-gradient-to-r w-96 rounded-2xl mx-auto'>
        <img src={currentImage} id='currentImage' className='m-auto rounded-2xl w-96 p-1'></img>
      </div>

      <div id='catFactDiv' className='flex md:w-[50vw] md:h-auto h-[45vh] outline-black outline-1 outline rounded-2xl mx-auto my-12 relative hover:scale-110 hover:outline-dashed transition-transform'>
        <p id='currentFact' className='flex font-bold text-xl mx-auto md:w-[35vw] w-[80vw] py-5 justify-center relative'>{currentFact}</p>
      </div>
    </>
  )
}

export default App
