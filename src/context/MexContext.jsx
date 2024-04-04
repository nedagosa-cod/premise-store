import { createContext, useState } from "react";
import { mexDataPhone } from "../components/scene/mexDataPhone";
import { useNavigate } from "react-router-dom";
import conversation from "../conversation/tendero";

const MexContext = createContext();

const MexProvider = ({ children }) => {
  const navigate = useNavigate();
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

  const updateResults = (results) => {
    setUserResults(results);

    /// ESPACIO PARA ENVIAR RESULTADOS A LA BASE DE DATOS ////
    console.log(results);

    // variables de datos de usuario "userData"
    // variables de datos de resultado "results/userResults"
    /// ESPACIO PARA ENVIAR RESULTADOS A LA BASE DE DATOS ////
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
  const welcomOwnScript = () => {
    setTimeout(() => {
      setOwnerChat((prevOwnerChat) => [
        ...prevOwnerChat,
        <div
          className="globo animate__animated animate__backInRight"
          key={prevOwnerChat.length}
        >
          <p>{conversation.NPC_options["first"].text}</p>
          <span>Cecilia</span>
        </div>,
      ]);
    }, 500);
  };
  const resetChat = (imgNpc) => {
    navigate("/");
    setActiveChat("first");
    setOwnerChat([]);
    welcomOwnScript();
    setImageNpc(imgNpc);
    setStartApp(true);
    setActiveSegment("punto");
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
    welcomOwnScript,
    setDataPhone,
  };
  return <MexContext.Provider value={data}>{children}</MexContext.Provider>;
};

export { MexProvider };
export default MexContext;
