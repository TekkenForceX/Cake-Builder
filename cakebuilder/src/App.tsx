import Layer from './Layer'
import './App.sass'
import Cake from './Cake/Cake'
import CakeBuilder from './CakeBuilder/CakeBuilder'
import { useState } from 'react'

const App = () => {
  const [layers, setLayers] = useState<Layer[]>([])

  return (
    <>
      <CakeBuilder />
      <Cake layers={layers} />
    </>
  )
}

export default App
