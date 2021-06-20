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
          <Modal show={show} onHide={handleClose} key={ite.idMeal} dialogClassName="my-modal">
            <div className="modal-header">
              <h2>{ite.strMeal}</h2>
              <h3>{ite.strArea}</h3>
            </div>
            <Modal.Body>
              <div className="modal-body">
                <img src={ite.strMealThumb} alt={ite.strMeal} />
                <div className="instructions">
                  <h4>Method</h4>
                  {ite.strInstructions}
                  <div className="ingredients">
                    <ul>
                      <li>{ite.strIngredient1}</li>
                      <li>{ite.strIngredient2}</li>
                      <li>{ite.strIngredient3}</li>
                      <li>{ite.strIngredient4}</li>
                      <li>{ite.strIngredient5}</li>
                      <li>{ite.strIngredient6}</li>
                      <li>{ite.strIngredient7}</li>
                      <li>{ite.strIngredient8}</li>
                      <li>{ite.strIngredient9}</li>
                      <li>{ite.strIngredient10}</li>
                      <li>{ite.strIngredient11}</li>
                      <li>{ite.strIngredient12}</li>
                      <li>{ite.strIngredient13}</li>
                      <li>{ite.strIngredient14}</li>
                      <li>{ite.strIngredient15}</li>
                      <li>{ite.strIngredient16}</li>
                      <li>{ite.strIngredient17}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Modal.Body>
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
