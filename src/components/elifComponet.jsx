import { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { elifAmount } from '../actions/elifActions';

const ElifTextComponent = () => {

    const [text, setText] = useState('');
    const counter = useSelector(store => store.count);
    const sinanText = useSelector(store => store.sinanText);
    const nebiText = useSelector(store => store.nebiText);
    const egeText = useSelector(store => store.egeText);
    const gokalpText = useSelector(store => store.gokalpText);
    const elifText = useSelector(store => store.elifText);

    const dispatcher = useDispatch();

    const handeClick = () => {
        const deger = document.getElementById("elifText").value
        setText(deger);
        dispatcher(elifAmount(deger));
    }
    return (
        <>
            <h1>Elif: {text}</h1>
            <p>store value : {counter}</p>
            <p>sinan value : {sinanText}</p>
            <p>nebi value : {nebiText}</p>
            <p>ego value : {egeText}</p>
            <p>gokalp value : {gokalpText}</p>
            <p>elif value : {elifText}</p>
            <input id='elifText' type="text" />
            <button onClick={handeClick} >OK</button>
        </>
    );
}
export default ElifTextComponent;