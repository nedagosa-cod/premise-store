import "./App.css";

import { Routes, Route } from "react-router-dom";

import Scene from "./components/scene/scene";
import TiendaCol from "./components/scene/colTScene";
import MexScene from "./components/scene/mexScene";
import Charla from "./components/charla/charla";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Charla />} />
      <Route path="/store" element={<Scene />} />
      <Route path="/coltstore" element={<TiendaCol />} />
      <Route path="/mexstore" element={<MexScene />} />
    </Routes>
  );
}

export default App;
