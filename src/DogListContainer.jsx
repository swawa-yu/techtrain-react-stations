// @ts-check

import { useState, useEffect } from 'react'

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

  </>)
}

export default DogListContainer
