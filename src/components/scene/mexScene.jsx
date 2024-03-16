import "./styles.scss";
import MexPhone from "../phone/mexPhone";
import Panorama from "./Panorama/Panorama";
import PreScene from "../preload/PreScene";

export default function MexScene() {
  return (
    <div className="box-scene">
      <MexPhone />
      <Panorama />
      <PreScene typeCartel="animate__slideOutUp" />
    </div>
  );
}
