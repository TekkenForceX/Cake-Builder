import Layer from "../Layer";
import LayerBuilder from "./LayerBuilder";
import LayerAdd from "./LayerAdd";
import LayerForm from "./LayerForm";

interface CakeBuilderProps {
    layers: Layer[];
    addLayer: (layer: Layer) => void;
    removeLayer: (id: number) => void;
}

const CakeBuilder: React.FC<CakeBuilderProps> = ({ layers, addLayer, removeLayer }) => {
    return (
        <div>
            <LayerAdd addLayer = {addLayer} />
            {layers.map((layer) => (
                <LayerBuilder key={layer.id} layer={layer} removeLayer={removeLayer} />
            )
        )}
        </div>
    )
}

export default CakeBuilder;