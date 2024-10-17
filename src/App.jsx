// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/greyhound-italian/n02091032_658.jpg')
  return (
    <div>
      <header>Hoge App</header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} alt="犬の画像" />
      <button onClick={() => setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')}>更新</button>
    </div>
  )
}
