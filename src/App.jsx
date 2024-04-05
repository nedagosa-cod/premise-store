import { Routes, Route } from "react-router-dom";

import MexScene from "./components/scene/mexScene";
import Charla from "./components/charla/charla";
import { MexProvider } from "./context/MexContext";
import TableScores from "./components/TableScores/TableScores";

function App() {
  return (
    <div className="app">
      <MexProvider>
        <Routes>
          <Route path="/" element={<Charla />} />
          <Route path="/conversation" element={<Charla />} />
          <Route path="/mexstore" element={<MexScene />} />
          <Route path="/scores" element={<TableScores />} />
        </Routes>
      </MexProvider>
    </div>
  );
}

export default App;
