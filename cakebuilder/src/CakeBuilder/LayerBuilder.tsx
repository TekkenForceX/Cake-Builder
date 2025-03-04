
import Layer from "../Layer"
import { FC } from "react"

interface LayerBuilderProps {
  layer: Layer
  removeLayer: (id: number) => void
}

const LayerBuilder: FC<LayerBuilderProps> = ({ layer, removeLayer }) => {
  const { height, width, color, id } = layer

  return (
    <div>
      <div>
        <h3>Layer Information</h3>
        <button onClick={() => removeLayer(id)}>Delete</button>
      </div>

      <div className="layer-info" key={layer.id}>
        <div>Color: {layer.color}</div>
        <div>Width: {layer.width}px</div>
        <div>Height: {layer.height}px</div>
      </div>
    </div>
  )
}

export default LayerBuilder

