import Layer from "../Layer";
import LayerBuilder from "./LayerBuilder";
import LayerAdd from "./LayerAdd";
import LayerForm from "./LayerForm";
import { useState } from "react";

interface CakeBuilderProps {
    layers: Layer[];
    addLayer: (layer: Layer) => void;
    removeLayer: (id: number) => void;
}

const CakeBuilder: React.FC<CakeBuilderProps> = ({ layers, addLayer, removeLayer }) => {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const closeForm = () => {
        setIsFormVisible(false)
    }
    
    return (
        <div>
            <LayerAdd setIsFormVisible={setIsFormVisible} />
            {isFormVisible && (
                <LayerForm addLayer={addLayer} closeForm={closeForm} />
            )}
            {layers.map((layer) => (
                <LayerBuilder key={layer.id} layer={layer} removeLayer={removeLayer} />
            )
        )}
        </div>
    )
}

export default CakeBuilder;