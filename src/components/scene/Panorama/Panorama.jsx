import { useContext, useEffect, useState } from "react";
import sceneStar from "../../../assets/img/mexSceneStart.jpg";
import entrada from "../../../assets/img/mexScene1.jpg";
import salida from "../../../assets/img/mexScene2.jpg";
import puerta from "../../../assets/img/mexScene0.jpg";
import MexContext from "../../../context/MexContext";

const Panorama = () => {
  const { setQuestion, userData } = useContext(MexContext);
  const changeScene = (nameScene) => {
    setScene(dataScene[nameScene]);
  };

  const dataScene = {
    sceneStar: {
      title: "Ingreso",
      image: sceneStar,
      pitch: 0,
      yaw: -3,
      hfov: 120,
      sceneFadeDuration: 10,
      hotSpots: [
        {
          id: 1,
          text: "Siguiente",
          type: "custom",
          pitch: -64,
          yaw: -9,
          cssClass: "m-spot",
          clickHandlerFunc: (e, clickHandlerArgs) => {
            console.log(clickHandlerArgs);
            changeScene("puerta");
          },
        },
        {
          id: 2,
          text: "Punto",
          type: "custom",
          pitch: 1,
          yaw: 4,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("punto");
          },
        },
      ],
    },
    entrada: {
      title: "Pasillo",
      image: entrada,
      pitch: -10,
      yaw: -71,
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
            setQuestion("enfriadores");
          },
        },
        {
          text: "Enfriadores",
          type: "custom",
          pitch: 0.65,
          yaw: 0.15,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("enfriador_a");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: 3,
          yaw: -73,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("producto");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: 8,
          yaw: 120,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("producto");
          },
        },
        {
          text: "Detergentes",
          type: "custom",
          pitch: 6,
          yaw: -28,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("detergentes");
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
            setQuestion("punto");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: 7,
          yaw: -16,
          cssClass: "foto",
          clickHandlerFunc: () => {
            setQuestion("imgDetergente");
          },
        },
      ],
    },
    salida: {
      title: "Pasillo Final",
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
            setQuestion("enfriador_b");
          },
        },
        {
          text: "Enfriadores",
          type: "custom",
          pitch: 6,
          yaw: 91,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("enfriadores");
          },
        },
        {
          text: "Enfriadores",
          type: "custom",
          pitch: -29,
          yaw: -10,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("enfriadores");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: -2,
          yaw: -150,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("producto");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: 12,
          yaw: -11,
          cssClass: "foto",
          clickHandlerFunc: () => {
            setQuestion("imgDetergente");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: 11,
          yaw: -95,
          cssClass: "foto",
          clickHandlerFunc: () => {
            setQuestion("imgPepsi");
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
      title: "Pricipal",
      image: puerta,
      pitch: -12,
      yaw: 7,
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
            setQuestion("enfriador_b");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: 5,
          yaw: 71,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("producto");
          },
        },
        {
          text: "Producto",
          type: "custom",
          pitch: -3,
          yaw: 20,
          cssClass: "spot",
          clickHandlerFunc: () => {
            setQuestion("producto");
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
            setQuestion("punto");
          },
        },
      ],
    },
  };

  const [scene, setScene] = useState(dataScene.sceneStar);

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

  useEffect(() => {
    createPannellum(scene);
    console.log(userData);
  }, [scene]);

  return <div id="panorama" className="panorama"></div>;
};

export default Panorama;
