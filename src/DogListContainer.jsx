// @ts-check

import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      setBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  }, [])
  return (<>
    <BreedsSelect breeds={breeds} />
  </>)
}

export default DogListContainer
