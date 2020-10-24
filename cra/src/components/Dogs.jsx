import React, { useEffect, useState } from 'react'
import './Dogs.css'

const Dogs = () => {
  const breedsList = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle']

  return (
    <div id="dogs-container">
      <div id="dogs-photo">
        <div className="loader">Loading...</div>
      </div>
      {breedsList.map(breed =>
        <button
          key={breed}
          onClick={}
        >
          {breed}
        </button>
      )}
    </div>
  )
}

export default Dogs
