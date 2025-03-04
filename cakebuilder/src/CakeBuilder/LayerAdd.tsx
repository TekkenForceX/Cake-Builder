//import Layer from "../Layer"
import { FC } from "react"

interface Props {
    setIsFormVisible: (isFormVisible: boolean) => void
}

const LayerAdd: FC<Props> = ({setIsFormVisible}) => {
    return (
        <div>
            <button onClick={
                () => setIsFormVisible(true)
            }>Add A Layer</button>
        </div>
    )
}

export default LayerAdd