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
  const [activeSegment, setActiveSegment] = useState('');

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
    if (segmento != '') {
      let res = formData.filter((el) => el.segmento == segmento);
      let numRandom = Math.floor(Math.random() * (res.length - 1 + 1));
      const dataLocal = JSON.parse(localStorage.getItem('data'))
      const dataExist = dataLocal.some(el=> el.id == res[numRandom].id)

      let resSum = 0

      do {
        if (resSum >= 10) return
      
        numRandom = Math.floor(Math.random() * (res.length - 1 + 1));
        resSum++
      } while (dataExist);

        setAks(res[numRandom].titulo);
        setAnswers(res[numRandom].arrayRespuestas);
        setNumAsk(res[numRandom].id);
        setTypee(res[numRandom].tipo)
        setActiveSegment(segmento)

    }
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
          pitch: -8,
          yaw: 116,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("cocacola");
          },
        },
        {
          text: "Neveras",
          type: "custom",
          pitch: 4,
          yaw: 143,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alcohol");
          },
        },
        {
          text: "Foto",
          type: "custom",
          pitch: 16,
          yaw: 125,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("Img_Coca_Cola");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 7,
          yaw: -9,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 7,
          yaw: -35,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("cofiteria");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 17,
          yaw: -22,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("miscelaneos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -19,
          yaw: 45,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("no alcohol");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -12,
          yaw: 142,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("neveras");
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
      <Phone ask={ask} answers={answers} numAsk={numAsk} type={typee} resetPhone={resetPhone} changeAsk={resABCD} activeSegment={activeSegment}/>
      <div id="panorama" className="panorama"></div>
    </div>
  );
}
