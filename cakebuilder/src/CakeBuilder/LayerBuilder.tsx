import Layer from "../Layer"
import { FC } from "react"

interface LayerBuilderProps {
  layer: Layer
  removeLayer: (layer: Layer) => void
}

const LayerBuilder: FC<LayerBuilderProps> = ({ layer, removeLayer }) => {
  const colorStyles = {
    height: layer.height * 5, 
    width: layer.width * 5,
    backgroundColor: layer.color
  }

  const TrashCan = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
    </svg>
  )

  return (
    <div className="layer-builder">
      <p><b>Layer Information</b></p>
      <div className="layer-info" key={layer.id}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span><b>Color: </b></span>
          <div style={{ ...colorStyles, marginLeft: "10px" }}></div>
        </div>
        <div><b>Width: </b>{layer.width}px</div>
        <div><b>Height: </b>{layer.height}px</div>
        <button className="trash-icon" onClick={() => removeLayer(layer)}>
          <TrashCan />
        </button>    
      </div>
    </div>
  )
}

export default LayerBuilder

