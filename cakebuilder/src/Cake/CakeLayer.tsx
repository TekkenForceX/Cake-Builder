import Layer from "../Layer"
import { FC } from "react"

interface CakeLayerProps {
    layer: Layer
}

const CakeLayer: FC<CakeLayerProps> = ({layer}) => {
    const styles={
        height: layer.height * 50,
        width: layer.width * 50,
        border: "1px solid black",
        backgroundColor: layer.color
    }
    
    return (
        <div className="cake-layer" style={styles}></div>
    )
}

export default CakeLayer