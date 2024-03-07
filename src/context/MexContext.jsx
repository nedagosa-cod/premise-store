import { createContext, useState } from "react";
import { mexDataPhone } from "../components/scene/mexDataPhone";

const MexContext = createContext();

const MexProvider = ({ children }) => {
  const [dataPhone, setDataPhone] = useState(mexDataPhone);

  const data = {
    dataPhone,
  };
  return <MexContext.Provider value={data}>{children}</MexContext.Provider>;
};

export { MexProvider };
export default MexContext;
