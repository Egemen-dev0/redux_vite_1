import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { updateSinanText } from '../actions/sinanActions';
const SinanComp = () => {
    const [myLabel, setMyLabel] = useState("")

    const dispatcher = useDispatch();
    
    const counter = useSelector(store => store.count);
    const sinanText = useSelector(store => store.sinanText);
    const nebiText = useSelector(store => store.nebiText);
    const egeText = useSelector(store => store.egeText);
    const elifText = useSelector(store => store.elifText);
    const gokalpText = useSelector(store => store.gokalpText);
    const onClick = () => {
        let myInput = document.getElementById("sinanText").value;
        setMyLabel(myInput)
        dispatcher(updateSinanText(myInput))
    }
    return(
        <>
            <h1>Sinan: {myLabel}</h1>
            <p>Counter: {counter}</p>
            <p>Sinan: {sinanText}</p>
            <p>Nebi: {nebiText}</p>
            <p>Ege: {egeText}</p>
            <p>Elif: {elifText}</p>
            <p>Gökalp: {gokalpText}</p>
            <input id='sinanText' type="text" />
            <button onClick={onClick} >OK</button>
        </>
    )
}

export default SinanComp