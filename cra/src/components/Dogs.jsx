import React, { useEffect, useState } from 'react'
import './Dogs.css'

const Dogs = () => {
  const breedsList = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle']
  const [breed, setBreed] = useState(breedsList[0])
  const [photoURL, setPhotoURL] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(({ message }) => {
        setPhotoURL(message)
        setLoading(false)
      })
  }, [breed])

  return (
    <div id="dogs-container">
      <div id="dogs-photo">
        {loading
          ? <div className="loader">Loading...</div>
          : <img id="dogs-photo" src={photoURL} alt="" />
        }
      </div>
      {breedsList.map(breed =>
        <button
          key={breed}
          onClick={() => {
            setLoading(true)
            setBreed(breed)
          }}
        >
          {breed}
        </button>
      )}
    </div>
  )
}

export default Dogs
