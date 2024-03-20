import { createContext, useState } from "react";
import { mexDataPhone } from "../components/scene/mexDataPhone";

const MexContext = createContext();

const MexProvider = ({ children }) => {
  const [dataPhone, setDataPhone] = useState(mexDataPhone);
  const [activeSegment, setActiveSegment] = useState("punto");

  const [userData, setUserData] = useState({});
  const [userResults, setUserResults] = useState([
    {
      id: 9999,
      question: "question?",
      results: [],
      score: 0,
    },
  ]);
  const updateResults = (data, result, score) => {
    setUserResults((preveResults) => {
      return [
        ...preveResults,
        {
          id: data.id,
          question: data.title,
          results: [...preveResults, result],
          score: score,
        },
      ];
    });
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
  };
  return <MexContext.Provider value={data}>{children}</MexContext.Provider>;
};

export { MexProvider };
export default MexContext;
