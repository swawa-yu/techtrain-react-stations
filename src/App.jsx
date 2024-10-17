// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/greyhound-italian/n02091032_658.jpg')

  const getRandomDogUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    return data.message
  }

  return (
    <div>
      <header>Hoge App</header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} alt="犬の画像" />
      <button onClick={() => getRandomDogUrl().then((url) => setDogUrl(url))}>更新</button>
    </div>
  )
}
