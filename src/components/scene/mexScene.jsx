import "./styles.scss";
import MexPhone from "../phone/mexPhone";
import Panorama from "./Panorama/Panorama";
import Preload from "../../components/preload/preload";
import { MexProvider } from "../../context/MexContext";

export default function MexScene() {
  let alertPreload = true;
  return (
    <div className="box-scene">
      {/* <Preload funct={alertPreload} /> */}
      <MexProvider>
        <MexPhone />
        <Panorama />
      </MexProvider>
    </div>
  );
}
