import Layer from './Layer'
import './App.sass'
import Cake from './Cake/Cake'
import CakeBuilder from './CakeBuilder/CakeBuilder'
import { useState } from 'react'

const App = () => {
  const [layers, setLayers] = useState<Layer[]>([])

  const addLayer = () => {

  }

  const removeLayer = () => {

  }

  return (
    <>
      <CakeBuilder {...layers} addLayer={addLayer} removeLayer={removeLayer} />
      <Cake layers={layers} />
    </>
  )
}

export default App
