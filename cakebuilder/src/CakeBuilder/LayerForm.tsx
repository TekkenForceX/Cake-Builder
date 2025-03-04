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

    return (
        <>
            <h1>Form Goes Here</h1>
            <button onClick={closeForm}>Cancel</button>
        </>
    )
}

export default LayerForm