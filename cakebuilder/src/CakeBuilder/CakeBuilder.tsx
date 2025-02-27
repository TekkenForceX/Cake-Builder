//import Layer from "../Layer"
import LayerBuilder from "./LayerBuilder"
import LayerAdd from "./LayerAdd"
import LayerForm from "./LayerForm"

const CakeBuilder = () => {
    return (
        <div>
            <h1>This will be our Cake Builder</h1>
            <LayerAdd />
            <LayerBuilder />
            <LayerForm />
        </div>
    )
}

export default CakeBuilder