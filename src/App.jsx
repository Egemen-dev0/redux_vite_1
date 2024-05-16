import './App.css'
import COPM1 from './components/COMP1';
import COPM2 from './components/COMP2';
import COPM3 from './components/COMP3';
import SinanComp from './components/SinanComp';
import NebiComp from './components/NebiCOMP';
import EgeComp from './components/EgoComp';
import GokalpCOMP1 from './components/gokalpCOMP1';
import ElifTextComponent from './components/elifComponet';

const initializeState = 0;
function App() {

  return (
    <>
      <COPM1 />
      <br />
      <COPM2 />
      <br />
      <COPM3 />
      <br />
      <SinanComp />
      <ElifTextComponent />
      <NebiComp/>
      <EgeComp />
      <GokalpCOMP1/>
    </>

  )
}

export default App
