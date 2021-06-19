import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import Card_ from '../Card_'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [meals, setMeals] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
        setMeals(data.meals)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [userInput])
  console.log(meals)



  //* Get User Input
  const getUserInput = e => {
    setUserInput(e.target.value)
  }

  //* Open Modal
  const openModal = e => {
    console.log(e.target.id)
    setShow(true)
  }

  return (
    <>
      <section className="home">
        <SearchBar
          getUserInput={getUserInput}
        />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="wrapper">
          {!meals ? <p>Sorry this recipe does not exist</p> :
            meals.map(meal =>
              <>
                <Card_
                  key={meal.idMeal}
                  name={meal.strMeal}
                  image={meal.strMealThumb}
                  area={meal.strArea}
                  id={meal.idMeal}
                  openModal={openModal}
                />
              </>
            )

          }
        </div>
      </section>
    </>
  )
}

export default Home
