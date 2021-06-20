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
                <div className="img-text">
                  <img src={ite.strMealThumb} alt={ite.strMeal} />
                  <div className="instructions">
                    <h4>Method</h4>
                    {ite.strInstructions}
                  </div>
                </div>

                <div className="ingredients">
                  <ul>
                    {!ite.strIngredient1 ? false : <li><strong>{ite.strIngredient1}:</strong>  {ite.strMeasure1}</li>}  
                    {!ite.strIngredient2 ? false : <li><strong>{ite.strIngredient2}:</strong>  {ite.strMeasure2}</li>}  
                    {!ite.strIngredient3 ? false : <li><strong>{ite.strIngredient3}:</strong>  {ite.strMeasure3}</li>}  
                    {!ite.strIngredient4 ? false : <li><strong>{ite.strIngredient4}:</strong>  {ite.strMeasure4}</li>}  
                    {!ite.strIngredient5 ? false : <li><strong>{ite.strIngredient5}:</strong>  {ite.strMeasure5}</li>}  
                    {!ite.strIngredient6 ? false : <li><strong>{ite.strIngredient6}:</strong>  {ite.strMeasure6}</li>}  
                    {!ite.strIngredient7 ? false : <li><strong>{ite.strIngredient7}:</strong>  {ite.strMeasure7}</li>}  
                    {!ite.strIngredient8 ? false : <li><strong>{ite.strIngredient8}:</strong>  {ite.strMeasure8}</li>}  
                    {!ite.strIngredient9 ? false : <li><strong>{ite.strIngredient9}:</strong>  {ite.strMeasure9}</li>}  
                    {!ite.strIngredient10 ? false : <li><strong>{ite.strIngredient10}:</strong>  {ite.strMeasure10}</li>}  
                    {!ite.strIngredient11 ? false : <li><strong>{ite.strIngredient11}:</strong>  {ite.strMeasure11}</li>}  
                    {!ite.strIngredient12 ? false : <li><strong>{ite.strIngredient12}:</strong>  {ite.strMeasure12}</li>}  
                    {!ite.strIngredient13 ? false : <li><strong>{ite.strIngredient13}:</strong>  {ite.strMeasure13}</li>}  
                    {!ite.strIngredient14 ? false : <li><strong>{ite.strIngredient14}:</strong>  {ite.strMeasure14}</li>}  
                    {!ite.strIngredient15 ? false : <li><strong>{ite.strIngredient15}:</strong>  {ite.strMeasure15}</li>}  
                    {!ite.strIngredient16 ? false : <li><strong>{ite.strIngredient16}:</strong> </li>}  
                    {!ite.strIngredient17 ? false : <li><strong>{ite.strIngredient17}:</strong>  {ite.strMeasure17}</li>}  
                    {!ite.strIngredient18 ? false : <li><strong>{ite.strIngredient18}:</strong>  {ite.strMeasure18}</li>}  
                    {!ite.strIngredient119 ? false : <li><strong>{ite.strIngredient119}:</strong>  {ite.strMeasure19}</li>}  
                    {!ite.strIngredient20 ? false : <li><strong>{ite.strIngredient20}:</strong>  {ite.strMeasure20}</li>} 
                  </ul>
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
