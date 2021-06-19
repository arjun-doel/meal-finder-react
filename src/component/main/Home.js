import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import Card_ from '../Card_'
import Modal from 'react-bootstrap/Modal'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [meals, setMeals] = useState([])
  const [show, setShow] = useState(false)
  const [modalInfo, setModalInfo] = useState([])
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
    const id = e.target.id
    const filteredArray = meals.filter(ite => ite.idMeal === id)
    setModalInfo(filteredArray)
    setShow(true)

  }

  // console.log(modalID)

  return (
    <>
      {modalInfo.map(ite =>
        <>
          <Modal show={show} onHide={handleClose} key={ite.idMeal}>
            <Modal.Header>
              <Modal.Title>{ite.strMeal}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </>
      )}

      <section className="home">
        <SearchBar
          getUserInput={getUserInput}
        />
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
