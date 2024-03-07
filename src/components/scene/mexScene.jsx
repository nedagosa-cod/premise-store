import { useEffect, useState } from "react";
import "./styles.scss";

import entrada from "../../assets/img/mexScene1.jpg";
import salida from "../../assets/img/mexScene2.jpg";
import puerta from "../../assets/img/mexScene0.jpg";

import Preload from "../../components/preload/preload";
import MexPhone from "../phone/mexPhone";
import { MexProvider } from "../../context/MexContext";

export default function MexScene() {
  const changeScene = (nameScene) => {
    setScene(dataScene[nameScene]);
  };

  const dataScene = {
    entrada: {
      title: "Entrada",
      image: entrada,
      pitch: 2.22,
      yaw: -123,
      hfov: 120,
      sceneFadeDuration: 10,
      hotSpots: [
        {
          text: "Enfriadores",
          type: "custom",
          pitch: -9,
          yaw: -23,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("enfriadores");
          },
        },
        {
          text: "Enfriadores",
          type: "custom",
          pitch: 0.65,
          yaw: 0.15,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("enfriador_a");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: 3,
          yaw: -73,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("producto");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: 8,
          yaw: 120,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("producto");
          },
        },
        {
          text: "Detergentes",
          type: "custom",
          pitch: 6,
          yaw: -28,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("detergentes");
          },
        },
        {
          text: "Siguiente",
          type: "custom",
          pitch: -38,
          yaw: -22,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("salida");
          },
        },
        {
          text: "Siguiente",
          type: "custom",
          pitch: -48,
          yaw: -131,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("puerta");
          },
        },
        {
          text: "Punto",
          type: "custom",
          pitch: -26,
          yaw: -121,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("punto");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: 7,
          yaw: -16,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("imgDetergente");
          },
        },
      ],
    },
    salida: {
      title: "Final",
      image: salida,
      pitch: -1.05,
      yaw: -156.73,
      hfov: 120,
      hotSpots: [
        {
          text: "Enfriadores",
          type: "custom",
          pitch: 0.3,
          yaw: -96,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("enfriador_b");
          },
        },
        {
          text: "Enfriadores",
          type: "custom",
          pitch: 6,
          yaw: 91,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("enfriadores");
          },
        },
        {
          text: "Enfriadores",
          type: "custom",
          pitch: -29,
          yaw: -10,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("enfriadores");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: -2,
          yaw: -150,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("producto");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: 12,
          yaw: -11,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("imgDetergente");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: 11,
          yaw: -95,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("imgPepsi");
          },
        },
        {
          text: "Pasillo 3",
          type: "custom",
          pitch: -43,
          yaw: 179,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("entrada");
          },
        },
      ],
    },
    puerta: {
      title: "Entrada",
      image: puerta,
      pitch: -26,
      yaw: 80,
      hfov: 120,
      sceneFadeDuration: 10,
      hotSpots: [
        {
          text: "Enfriadores",
          type: "custom",
          pitch: 7,
          yaw: -37,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("enfriador_b");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: 5,
          yaw: 71,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("producto");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: -3,
          yaw: 20,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("producto");
          },
        },
        {
          text: "Siguiente",
          type: "custom",
          pitch: -46,
          yaw: 103,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("entrada");
          },
        },
        {
          text: "Punto",
          type: "custom",
          pitch: -40,
          yaw: -177,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("punto");
          },
        },
      ],
    },
  };

  const [scene, setScene] = useState(dataScene.puerta);

  const createPannellum = (nameScene) => {
    document.querySelector("#panorama").innerHTML = "";
    pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: nameScene.image,
      title: nameScene.title,
      yaw: nameScene.yaw,
      pitch: nameScene.pitch,
      hfov: nameScene.hfov,
      autoLoad: true,
      hotSpotDebug: true,
      sceneFadeDuration: nameScene.sceneFadeDuration,
      hotSpots: nameScene.hotSpots.map((element) => element),
    });
  };
  let alertPreload = true;
  useEffect(() => {
    createPannellum(scene);
  }, [scene]);

  return (
    <div className="box-scene">
      <MexProvider>
        <Preload funct={alertPreload} />
        <MexPhone />
        <div id="panorama" className="panorama"></div>
      </MexProvider>
    </div>
  );
}
