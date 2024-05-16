import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { gokalpAction } from "../actions/gokalpAction"

const GokalpCOMP1 = () => {
    const[text, setText] = useState("")

    const counter = useSelector(store => store.count);
    const gokalpText= useSelector(store => store.gokalpText);
    const nebiText= useSelector(store => store.nebiText);
    const elifText= useSelector(store => store.elifText);
    const sinanText= useSelector(store => store.sinanText);
    const egeText= useSelector(store => store.egeText);
   

   const dispatcher = useDispatch();


const onClick = () => {
   const textCatcher = document.getElementById("gokalp").value
   setText(textCatcher)
   dispatcher(gokalpAction(textCatcher))
}

    return (
        <>
            <h1>Gökalp : {text}</h1>
            
            <p>Counter : {counter}</p>
            <p>Sinan: {sinanText}</p>
            <p>Nebi: {nebiText}</p>
            <p>Ege: {egeText}</p>
            <p>Elif: {elifText}</p>
            <p>Gökalp: {gokalpText}</p>
            
            <input id="gokalp" type="text"/>
            <button onClick={onClick} >BUTON</button>
        </>
    )
}

export default GokalpCOMP1;