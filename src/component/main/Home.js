import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import Card_ from '../Card_'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [meals, setMeals] = useState([])

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

  console.log('input state ->', userInput)

  return (
    <>
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
