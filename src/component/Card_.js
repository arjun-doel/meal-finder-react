import React from 'react'

const Card_ = ({ name, image, area, id, openModal }) => {
  return (
    <>
      <div className="meal-card">
        <img src={image} alt={name} onClick={openModal} id={id} />
        <div className="meal-card-body">
          <div className="title-fav">
            <h5>{name}</h5>
            <i className="far fa-heart" id={id}></i>
          </div>
          <p>{area}</p>
        </div>
      </div>
    </>
  )
}

export default Card_
