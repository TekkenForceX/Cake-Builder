import Layer from "../Layer"
import { FC } from "react"

interface CakeLayerProps {
    layer: Layer
}

const CakeLayer: FC<CakeLayerProps> = ({layer}) => {
    const styles: React.CSSProperties = {
        height: layer.height * 75,
        width: layer.width * 75,
        border: "1px solid black",
        backgroundColor: layer.color,
        position: "relative",
        marginBottom: "-10px",
        zIndex: 2
    }

    const topStyles: React.CSSProperties = {
        height: "20%",
        width: "95%",
        borderRadius: "50%",
        borderBottom: "2px solid rgba(100, 100, 100, .3)",
        backgroundColor: "inherit",
        position: "absolute",
        top: "0", 
        left: "5px",
        right: "5px",
        zIndex: 1
    }
    
    return (
        <div className="cake-layer" style={styles}>
            <div className="layer-top" style={topStyles}></div>
        </div>
    )
}

export default CakeLayer