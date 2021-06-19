import React from 'react'

const SearchBar = ({ getUserInput }) => {
  return (
    <>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for meal" 
          onKeyUp={getUserInput}
        />
      </div>
    </>
  )
}

export default SearchBar
