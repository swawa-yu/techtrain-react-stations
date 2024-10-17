// @ts-check

import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogImageUrls, setDogImageUrls] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      const breedList = Object.keys(data.message)
      setBreeds(breedList)
      setSelectedBreed(breedList[0])
    }
    fetchBreeds()
  }, [])

  /**
   * @param {*} breed 
   */
  const fetchDogImageUrls = async (breed) => {
    return [
      'https://images.dog.ceo/breeds/greyhound-italian/n02091032_658.jpg',
      'https://images.dog.ceo/breeds/greyhound-italian/n02091032_658.jpg',
      'https://images.dog.ceo/breeds/greyhound-italian/n02091032_658.jpg'
    ]
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
    const data = await response.json()
    console.log(data.message)
    return data.message
  }

  return (
    <>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <button onClick={() => fetchDogImageUrls(selectedBreed).then(urls => setDogImageUrls(urls))}>表示</button>
      <ul>
        {dogImageUrls.map((dogImageUrl) => (
          <li key={dogImageUrl}>
            <img src={dogImageUrl} alt="dog" />
          </li>
        ))}
      </ul>
    </>
  )
}

export default DogListContainer
