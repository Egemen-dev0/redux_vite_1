import { useDispatch, useSelector } from "react-redux"
import { incrementAmount } from "../actions/countActions";

const COPM1 = () => {

    const counter = useSelector(store => store.count);
    const dispatcher = useDispatch();

    const onClick = () => {
        dispatcher(incrementAmount(1));
        console.log('clicked')
    }

    return (
        <>
            <button onClick={onClick}>ARTTIR</button>
            COMP1 : {counter}
        </>
    )
}

export default COPM1