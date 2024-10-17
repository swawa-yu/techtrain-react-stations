// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/greyhound-italian/n02091032_658.jpg')

  const getRandomDogUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    return data.message
  }
  return (<>
    <p>犬の画像を表示するサイトです。</p>
    <DogImage imageUrl={dogUrl} />
    <button onClick={() => getRandomDogUrl().then((url) => setDogUrl(url))}>更新</button>
  </>)
}

export default Description
