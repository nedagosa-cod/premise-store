import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Scene from './components/scene/scene'
import Charla from './components/charla/charla'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Charla />} />
        <Route path="/store" element={<Scene />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
