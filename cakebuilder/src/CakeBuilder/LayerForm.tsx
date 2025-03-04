import { use, useState } from "react";
import Layer from "../Layer"

interface LayerFormProps {
    addLayer: (layer: Layer) => void;
    closeForm: () => void;
}

const LayerForm: React.FC<LayerFormProps> = ({ addLayer, closeForm }) 
    const [height, setHeight] = useState(5);
    const [width, setWidth] = useState(5);
    const [color, setColor] = useState("#ff0000");

export default LayerForm