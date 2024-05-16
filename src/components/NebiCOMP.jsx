import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateNebiText } from '../actions/NebiActions';


export default function NebiCOMP() {
    const [mytext, setMyText] = useState("")
    const dispatcher = useDispatch();

    const counter = useSelector(store => store.count);
    const nebiText = useSelector(store => store.nebiText);
    const sinanText = useSelector(store => store.sinanText);
    const elifText = useSelector(store => store.elifText);
    const gokalpText = useSelector(store => store.gokalpText);
    const egeText = useSelector(store => store.egeText);

    const onClickHandler = () => {
        let myInput = document.getElementById("nebiText").value;
        dispatcher(updateNebiText(myInput));
        setMyText(myInput);
        
    }

    return (
        <>
            <h1>Nebi Comp : {mytext}</h1>
            <input id='nebiText' type="text"></input>
            <button onClick={onClickHandler}>Click</button>

            CompValue: {counter}

            <h3>Other Values: </h3>
            <ul>
                <li>nebiText: {nebiText}</li>
                <li>sinanText: {sinanText}</li>
                <li>elifText: {elifText}</li>
                <li>gokalpText: {gokalpText}</li>
                <li>egeText: {egeText}</li>
            </ul>

        </>
    )
}