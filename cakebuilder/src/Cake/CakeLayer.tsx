import Layer from "../Layer"
import { FC } from "react"

interface CakeLayerProps {
    layer: Layer
}

const CakeLayer: FC<CakeLayerProps> = ({layer}) => {
    return (
        <div 
            className="cake-layer"
            style={{
                height: `${layer.height}px`,
                width: `${layer.width}px`,
                backgroundColor: `${layer.color}px`
            }}>
                <p>Height: {layer.height}</p>
                <p>Width: {layer.width}</p>
                <p>Color: {layer.color}</p>
        </div>
    )
}

export default CakeLayer