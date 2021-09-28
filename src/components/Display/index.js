import { useDispatch, useSelector } from "react-redux"
import { addNumber, subNumber } from "../../store/counter/actions";
import "./styles.css";


const Display = () => {

    const dispatch = useDispatch();
    const number = useSelector(state => state.result);

    const handleClickAdd = () => {
        dispatch(addNumber())
    }

    const handleClickSub = () => {
        dispatch(subNumber())
    }

    return (
        <div>
            <p>
                {number}
            </p>
            <button onClick={handleClickAdd}>Somar</button>
            <button onClick={handleClickSub}>Subtrair</button>
        </div>
    )
}

export default Display;