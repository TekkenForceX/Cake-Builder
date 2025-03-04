import Layer from "../Layer"
import CakeLayer from "./CakeLayer"
import { FC } from "react"

interface CakeProps {
    layers: Layer[]
}

const Cake: FC<CakeProps> = ({ layers }) => {
    return (
        <div className="cake">
            {layers.map((layer) => (
                <CakeLayer key={layer.id} layer={layer}/>
            ))}
        </div>
    )
}

export default Cake