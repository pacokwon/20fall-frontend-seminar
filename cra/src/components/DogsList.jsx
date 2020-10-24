import React, { useEffect, useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import './DogsList.css'

const DogsList = () => {
    const breedsList = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle']

    return (
        <div id='dogslist-container'>
            <h1 style={{ fontFamily: 'Courier' }}>Liked Dogs: {}</h1>
            {breedsList.map(breed =>
                <button key={breed} onClick={}>
                    {breed}
                </button>
            )}
            {[0].map((url, index) =>
                <div className='dogslist-row'>
                    <img className='dogslist-img' src={""} />
                    <div className='dogslist-text'>
                        Adipisicing aliquid maxime vero fugiat asperiores saepe. Tempora ipsam laboriosam aliquam
                    </div>
                    <button className='dogslist-icon' onClick={} >
                        <MdFavoriteBorder size={32} />
                    </button>
                </div>
            )}
        </div>
    )
}

export default DogsList
