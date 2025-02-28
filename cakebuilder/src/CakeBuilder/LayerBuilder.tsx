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

      <div>
        <div>Color: {color}</div>
        <div>Width: {width}px</div>
        <div>Height: {height}px</div>
      </div>
    </div>
  )
}

export default LayerBuilder
