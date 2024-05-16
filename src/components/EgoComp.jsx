import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {egeAction} from "../actions/EgoActions"
const EgeComp = () => {
  const [state, setState] = useState("");

  const dispatcher = useDispatch();

  const handleAge = () => {
    const deger = document.getElementById("EgoText").value;
    setState(deger);
    dispatcher(egeAction(deger))
  };

  const counter = useSelector((store) => store.count);
  const storeegeText = useSelector((store) => store.egeText);
  const storesinanText = useSelector((store) => store.sinanText);
  const storenebiText = useSelector((store) => store.nebiText);
  const storegokalpText = useSelector((store) => store.gokalpText);
  const storeelifText = useSelector((store) => store.elifText);



  return (
    <>
      <h1>Ego : {storeegeText}</h1>
      <ul>Sinan : {storesinanText}</ul>
      <ul>Nebi : {storenebiText}</ul>
      <ul>Gökalp : {storegokalpText}</ul>
      <ul>Elif : {storeelifText}</ul>
      <ul>EgoText : {state}</ul>
      <ul>Counter: {counter}</ul>
      <input type="text" id="EgoText" />
      <button onClick={handleAge}>Yazdır</button>
    </>
  );
};

export default EgeComp;
