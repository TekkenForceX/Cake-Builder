import { use, useState } from "react";
import Layer from "../Layer"

interface LayerFormProps {
    addLayer: (layer: Layer) => void;
    closeForm: () => void;
}

const LayerForm: React.FC<LayerFormProps> = ({ addLayer, closeForm }) => {

    const [height, setHeight] = useState(5);
    const [width, setWidth] = useState(5);
    const [color, setColor] = useState("#ff0000");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addLayer({id: Date.now(), height, width, color });
        closeForm();
    }

    return (
       <form onSubmit={handleSubmit}>
        <label>Height (0.5 - 10):</label>
        <input type="number" min="0.5" max="10" step="0.5" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} />
        
        <label>Width (1 - 10):</label>
        <input type="number" min="1" max="10" step="1" value={width} onChange={(e) => setWidth(parseFloat(e.target.value))} /> 

        <label>Color:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

        <button type="submit">Save</button>
       </form>
    )
}

export default LayerForm