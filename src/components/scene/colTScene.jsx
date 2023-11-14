import { useEffect, useState } from "react";
import "./styles.scss";
import { formData } from "./AppMobile";

import entrada from "../../assets/img/tiendaCol.jpg";

import Preload from "../../components/preload/preload";
import Phone from "../phone/phone";

export default function Scene() {
  const [ask, setAks] = useState("");
  const [answers, setAnswers] = useState([]);
  const [numAsk, setNumAsk] = useState(0);
  const [typee, setTypee] = useState('');

  const changeScene = (nameScene) => {
    setScene(dataScene[nameScene]);
  };

  const resetPhone = () =>{
    setAks("");
    setAnswers([]);
    setNumAsk(0);
    setTypee('')
  }

  const resABCD = (segmento) => {
    let res = formData.filter((el) => el.segmento == segmento);
    let numRandom = Math.floor(Math.random() * (res.length - 1 + 1));

    setAks(res[numRandom].titulo);
    setAnswers(res[numRandom].arrayRespuestas);
    setNumAsk(res[numRandom].id);
    setTypee(res[numRandom].tipo)
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
          text: "Neveras",
          type: "custom",
          pitch: 5,
          yaw: -68,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("cocacola");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -17,
          yaw: 120,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("miscelaneos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 6,
          yaw: 177,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("mascotas");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -24,
          yaw: 30,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("medicinal");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 37,
          yaw: 54,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alcohol");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -32,
          yaw: 65,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alcohol");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 8,
          yaw: 128,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("cofiteria");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 7,
          yaw: -151,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("cofiteria");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -5,
          yaw: -45,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("no alcohol");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 9,
          yaw: 103,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("personal");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -15,
          yaw: 132,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("personal");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: -8,
          yaw: -76,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("Img_Coca_Cola");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: -30,
          yaw: 78,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("img_cigarrillos");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: -32,
          yaw: 38,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("img_medicamentos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -28,
          yaw: 111,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -13,
          yaw: 85,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
        {
          text: "Pasillo 1",
          type: "custom",
          pitch: -29.74,
          yaw: -91.59,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_1_a");
          },
        },
        {
          text: "Pasillo 2",
          type: "custom",
          pitch: -30.82,
          yaw: -130.14,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_2_a");
          },
        },
        {
          text: "Pasillo 3",
          type: "custom",
          pitch: -13.52,
          yaw: -166.85,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_3_a");
          },
        },
      ],
    },
  };

  const [scene, setScene] = useState(dataScene.entrada);

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
  let alertPreload = true
  useEffect(() => {
    createPannellum(scene);
  }, [scene]);
  return (
    <div className="box-scene">
      <Preload funct={alertPreload} />
      <Phone ask={ask} answers={answers} numAsk={numAsk} type={typee} resetPhone={resetPhone}/>
      <div id="panorama" className="panorama"></div>
    </div>
  );
}
