import { createContext, useState } from "react";
import { mexDataPhone } from "../components/scene/mexDataPhone";

const MexContext = createContext();

const MexProvider = ({ children }) => {
  const [dataPhone, setDataPhone] = useState(mexDataPhone);
  const [activeSegment, setActiveSegment] = useState("punto");

  const [userData, setUserData] = useState({});
  const [userResults, setUserResults] = useState({});

  const updateDataPhone = (id, respuestas) => {
    setDataPhone(
      dataPhone.map((objeto) => {
        if (objeto.id === id) {
          return { ...objeto, respuestas_usuario: respuestas, status: true };
        }
        return objeto;
      })
    );
  };
  const deleteDataPhone = (idToDelete) => {
    const updatedItems = dataPhone.filter((item) => item.id !== idToDelete);
    setDataPhone(updatedItems);
  };
  const setQuestion = (name) => {
    setActiveSegment(name);
  };
  const data = {
    dataPhone,
    activeSegment,
    updateDataPhone,
    deleteDataPhone,
    setQuestion,
    setUserData,
    userData,
  };
  return <MexContext.Provider value={data}>{children}</MexContext.Provider>;
};

export { MexProvider };
export default MexContext;
