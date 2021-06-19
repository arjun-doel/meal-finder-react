import React from 'react'

const Card_ = ({ name, image, area, id, openModal }) => {
  return (
    <>
      <div className="meal-card">
        <img onClick={openModal} src={image} alt={name} id={id} />
        <div className="meal-card-body">
          <h5>{name}</h5>
          <p>{area}</p>
        </div>
      </div>
    </>
  )
}

export default Card_
