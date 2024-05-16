import { useSelector } from "react-redux";

const COPM3 = ()=>{
    const counter = useSelector(store => store.count);
    return (
        <>
        COPM3 : {counter}
        </>
    )
 }

 export default COPM3