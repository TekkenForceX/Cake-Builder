//import Layer from "../Layer"


import React from "react";
import Layer from "../Layer";

interface LayerBuilderProps {
  layer: Layer;
  removeLayer: (id: number) => void;
}

const LayerBuilder: React.FC<LayerBuilderProps> = ({ layer, removeLayer }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: layer.color }}
      ></div>
      <p>Height: {layer.height} | Width: {layer.width}</p>
      <button onClick={() => removeLayer(layer.id)}>
        Delete
      </button>
    </div>
  );
};

export default LayerBuilder;

  
