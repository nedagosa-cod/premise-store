import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Scene from './components/scene/scene'
import TiendaCol from './components/scene/colTScene'
import MexScene from './components/scene/mexScene'
import Charla from './components/charla/charla'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Charla />} />
        <Route path="/store" element={<Scene />} />
        <Route path="/coltstore" element={<TiendaCol />} />
        <Route path="/mexstore" element={<MexScene />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
