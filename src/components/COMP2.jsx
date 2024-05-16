import { useSelector } from "react-redux";

const COPM2 = ()=>{
    const counter = useSelector(store => store.count);
    return (
        <>
        COMP2 : {counter}
        </>
    )
 }

 export default COPM2