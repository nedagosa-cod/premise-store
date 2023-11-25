import { useEffect, useState } from "react";
import "./styles.scss";
import { formData } from "./mexDataPhone";

import entrada from "../../assets/img/mexScene1.jpg";
import salida from "../../assets/img/mexScene2.jpg";

import Preload from "../../components/preload/preload";
import Phone from "../phone/mexPhone";

export default function MexScene() {
  const [ask, setAks] = useState("");
  const [answers, setAnswers] = useState([]);
  const [numAsk, setNumAsk] = useState(0);
  const [typee, setTypee] = useState('');
  const [activeSegment, setActiveSegment] = useState('');
  const [startPos, setStartPos] = useState(0);

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
      const dataLocal = JSON.parse(localStorage.getItem('data'))
      
      let resultado = res.filter(objeto1 => !dataLocal.some(objeto2 => objeto2.id === objeto1.id));
          if (resultado[startPos] !== undefined) {
            setAks(resultado[startPos].titulo);
            setAnswers(resultado[startPos].arrayRespuestas);
            setNumAsk(resultado[startPos].id);
            setTypee(resultado[startPos].tipo)
            setActiveSegment(segmento)
            setStartPos(startPos+1)
          } else {
            setStartPos(0)
          }
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
          pitch: 0.30,
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
    resABCD('punto')
    createPannellum(scene);
  }, [scene]);
  return (
    <div className="box-scene" name={numAsk}>
      <Preload funct={alertPreload} />
      <Phone ask={ask} answers={answers} numAsk={numAsk} type={typee} resetPhone={resetPhone} changeAsk={resABCD} activeSegment={activeSegment}/>
      <div id="panorama" className="panorama"></div>
    </div>
  );
}
