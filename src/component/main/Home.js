import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

const Home = () => {
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [userInput])



  //* Get User Input
  const getUserInput = e => {
    setUserInput(e.target.value)
  }

  console.log('input state ->', userInput)

  return (
    <>
      <section className="home">
        <SearchBar
          getUserInput={getUserInput}
        />
        <div className="wrapper">
          <h1>Home</h1>
        </div>
      </section>
    </>
  )
}

export default Home
