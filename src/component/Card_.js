import React from 'react'

const Card_ = ({ name, image, area }) => {
  return (
    <>
      <div className="meal-card">
        <img src={image} alt={name} />
        <div className="meal-card-body">
          <h5>{name}</h5>
          <p>{area}</p>
        </div>
      </div>
    </>
  )
}

export default Card_
