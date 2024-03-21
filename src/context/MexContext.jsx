import { createContext, useState } from "react";
import { mexDataPhone } from "../components/scene/mexDataPhone";

const MexContext = createContext();

const MexProvider = ({ children }) => {
  // charla
  const [activeChat, setActiveChat] = useState("first");
  const [ownerChat, setOwnerChat] = useState([]);
  const [imageNpc, setImageNpc] = useState();
  // scene phone
  const [dataPhone, setDataPhone] = useState(mexDataPhone);
  const [activeSegment, setActiveSegment] = useState("punto");
  const [startApp, setStartApp] = useState(
    localStorage.getItem("login") == "true" ? false : true
  );
  // VARIABLES PARA BASES DE DATOS
  const [userData, setUserData] = useState({});
  const [userResults, setUserResults] = useState([]);
  // VARIABLES PARA BASES DE DATOS ^
  const updateResults = (results) => {
    setUserResults(results);
  };
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
  const resetChat = () => {
    setActiveChat("first");
    setOwnerChat([]);
    // setImageNpc(npcStandar);
  };

  const data = {
    dataPhone,
    activeSegment,
    updateDataPhone,
    deleteDataPhone,
    setQuestion,
    setUserData,
    userData,
    updateResults,
    userResults,
    setStartApp,
    startApp,
    activeChat,
    ownerChat,
    imageNpc,
    setActiveChat,
    setOwnerChat,
    setImageNpc,
    resetChat,
  };
  return <MexContext.Provider value={data}>{children}</MexContext.Provider>;
};

export { MexProvider };
export default MexContext;
