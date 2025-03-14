import Layer from "./Layer"
import "./App.sass"
import Cake from "./Cake/Cake"
import CakeBuilder from "./CakeBuilder/CakeBuilder"
import { useState } from "react"

const App = () => {
  const [layers, setLayers] = useState<Layer[]>([])

  const addLayer = (newLayer: Layer) => {
    setLayers(ls => [...ls, newLayer])
  }

  const removeLayer = (layer: Layer) => {
    setLayers(layers.filter(l => l.id !== layer.id))
  }

  return (
    <>
      <div className="header">
        <h1>Cake Builder Pro</h1>
        <h3>Build your own custom <b><i>tier-iffic</i></b> cake for any special event!</h3>
      </div>
      <div className='app-container'>
        <CakeBuilder layers={layers} addLayer={addLayer} removeLayer={removeLayer} />
        <Cake layers={layers} />
      </div>
    </>
  )
}

export default App
