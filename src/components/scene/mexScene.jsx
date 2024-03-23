import "./styles.scss";
import MexPhone from "../phone/mexPhone";
import Panorama from "./Panorama/Panorama";
import PreScene from "../preload/PreScene";
import { useEffect } from "react";

export default function MexScene() {
  // useEffect(() => {
  //   window.location.reload();
  // });
  return (
    <div className="box-scene">
      <MexPhone />
      <Panorama />
      <PreScene typeCartel="animate__slideOutUp" />
    </div>
  );
}
