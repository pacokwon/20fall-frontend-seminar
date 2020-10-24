import React, { useEffect, useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import './DogsList.css'

const DogsList = () => {
    const [dogs, setDogs] = useState([])
    const [likes, setLikes] = useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breed/retriever/golden/images/random/5")
            .then(res => res.json())
            .then(({ message }) => {
                setDogs(message)
                setLikes(message.map(_ => false))
            })
    }, [])

    const handleLike = index => () => {
        setLikes(likes => likes.map((e, idx) => idx === index ? !e : e))
    }

    return (
        <div id='dogslist-container'>
            {dogs.map((url, index) => (
                <div className='dogslist-row' key={url} onClick={handleLike(index)}>
                    <img className='dogslist-img' src={url} />
                    <div className='dogslist-text'>
                        Adipisicing aliquid maxime vero fugiat asperiores saepe. Tempora ipsam laboriosam aliquam
                    </div>
                    <div className='dogslist-icon'>
                        {likes[index] ? <MdFavorite size={32} /> : <MdFavoriteBorder size={32} />}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DogsList
