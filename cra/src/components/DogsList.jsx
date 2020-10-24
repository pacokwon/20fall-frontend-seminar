import React, { useEffect, useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import './DogsList.css'

const DogsList = () => {
    const breedsList = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle']
    const [dogs, setDogs] = useState([])
    const [likes, setLikes] = useState([])
    const [breed, setBreed] = useState(breedsList[0])

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
            .then(res => res.json())
            .then(({ message }) => {
                setDogs(message)
                setLikes(message.map(_ => false))
            })
    }, [breed])

    const handleLike = index => () => {
        setLikes(likes => likes.map((e, idx) => idx === index ? !e : e))
    }

    return (
        <div id='dogslist-container'>
            <h1 style={{ fontFamily: 'Courier' }}>Liked Dogs: {likes.filter(x => x).length}</h1>
            {breedsList.map(breed =>
                <button
                    key={breed}
                    onClick={() => setBreed(breed)}
                >
                    {breed}
                </button>
            )}
            {dogs.map((url, index) => (
                <div className='dogslist-row' key={url}>
                    <img className='dogslist-img' src={url} />
                    <div className='dogslist-text'>
                        Adipisicing aliquid maxime vero fugiat asperiores saepe. Tempora ipsam laboriosam aliquam
                    </div>
                    <button className='dogslist-icon' onClick={handleLike(index)} >
                        {likes[index] ? <MdFavorite size={32} /> : <MdFavoriteBorder size={32} />}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default DogsList
