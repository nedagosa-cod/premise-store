import { useEffect, useState } from "react";
import "./styles.scss";
import { formData } from "./AppMobile";

import entrada from "../../assets/img/x_entrada.jpg";
import pasillo_1_a from "../../assets/img/x_pasillo_1_a.jpg";
import pasillo_1_b from "../../assets/img/pasillo_1_b.jpg";
import pasillo_1_c from "../../assets/img/pasillo_1_c.jpg";
import pasillo_2_a from "../../assets/img/x_pasillo_2_a.jpg";
import pasillo_2_b from "../../assets/img/pasillo_2_b.jpg";
import pasillo_2_c from "../../assets/img/pasillo_2_c.jpg";
import pasillo_3_a from "../../assets/img/pasillo_3_a.jpg";
import pasillo_3_b from "../../assets/img/pasillo_3_b.jpg";
import pasillo_3_c from "../../assets/img/pasillo_3_c.jpg";
import final from "../../assets/img/final.jpg";

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
          text: "Canastas",
          type: "custom",
          pitch: -21,
          yaw: 31,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 37,
          yaw: 53,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -26,
          yaw: 71,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -17,
          yaw: 122,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -43,
          yaw: -135,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo Z");
          },
        },
        {
          text: "Neveras",
          type: "custom",
          pitch: -0.63,
          yaw: -65,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Neveras");
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
    pasillo_1_a: {
      title: "Pasillo 1",
      image: pasillo_1_a,
      pitch: -13.35,
      yaw: 87.93,
      hfov: 120,
      hotSpots: [
        {
          text: "Canastas",
          type: "custom",
          pitch: -2,
          yaw: 26,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          text: "Marca de Presencia",
          type: "custom",
          pitch: 14,
          yaw: -158,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("mp");
          },
        },
        {
          text: "adelante",
          type: "custom",
          pitch: -53.33,
          yaw: 90.21,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_1_b");
          }
        },
        {
          text: "Volver a la Entrada",
          type: "custom",
          pitch: -33.25,
          yaw: -90.41,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("entrada");
          }
        },
      ],
    },
    pasillo_1_b: {
      title: "Pasillo 1",
      image: pasillo_1_b,
      pitch: -15.67,
      yaw: 48.04,
      hfov: 120,
      hotSpots: [
        {
          type: "custom",
          pitch: -16.15,
          yaw: -157.18,
          cssClass: "spot",
        },
        {
          type: "custom",
          pitch: -16.28,
          yaw: -1.66,
          cssClass: "spot",
        },
        {
          text: "adelante",
          type: "custom",
          pitch: -53.84,
          yaw: 56.09,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_1_c");
          }
        },
        {
          text: "volver",
          type: "custom",
          pitch: -39.94,
          yaw: -121.85,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_1_a");
          }
        },
      ],
    },
    pasillo_1_c: {
      title: "Pasillo 1",
      image: pasillo_1_c,
      pitch: -9,
      yaw: -111,
      hfov: 120,
      hotSpots: [
        {
          type: "custom",
          pitch: -16.15,
          yaw: -157.18,
          cssClass: "spot",
        },
        {
          type: "custom",
          pitch: -16.28,
          yaw: -1.66,
          cssClass: "spot",
        },
        {
          text: "volver",
          type: "custom",
          pitch: -41.22,
          yaw: -75.55,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_1_b");
          },
        },
        {
          text: "Pasillo 2",
          type: "custom",
          pitch: -49,
          yaw: 67,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_2_c");
          },
        },
      ],
    },
    pasillo_2_a: {
      title: "Pasillo 2",
      image: pasillo_2_a,
      pitch: -0.85,
      yaw: -116,
      hfov: 120,
      hotSpots: [
        {
          text: "Canastas",
          type: "custom",
          pitch: 3,
          yaw: -25,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          text: "adelante",
          type: "custom",
          pitch: -37.24,
          yaw: -119,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_2_b");
          },
        },
        {
          text: "Volver a la Entrada",
          type: "custom",
          pitch: -53,
          yaw: 64,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("entrada");
          },
        },
      ],
    },
    pasillo_2_b: {
      title: "Pasillo 2",
      image: pasillo_2_b,
      pitch: 2,
      yaw: -85,
      hfov: 120,
      hotSpots: [
        {
          text: "adelante",
          type: "custom",
          pitch: -42,
          yaw: -91,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_2_c");
          },
        },
        {
          text: "volver",
          type: "custom",
          pitch: -48,
          yaw: 97,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_2_a");
          },
        },
      ],
    },
    pasillo_2_c: {
      title: "Pasillo 2",
      image: pasillo_2_c,
      pitch: 4,
      yaw: -94,
      hfov: 120,
      hotSpots: [
        {
          text: "Canastas",
          type: "custom",
          pitch: -2,
          yaw: 26,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          type: "custom",
          pitch: -16.28,
          yaw: -1.66,
          cssClass: "spot",
        },
        {
          text: "Final Pasillo 1",
          type: "custom",
          pitch: -33,
          yaw: -40,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_1_c");
          },
        },
        {
          text: "volver",
          type: "custom",
          pitch: -44,
          yaw: 94,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_2_b");
          },
        },
        {
          text: "Adelante",
          type: "custom",
          pitch: -27,
          yaw: -133,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("final");
          },
        },
      ],
    },
    pasillo_3_a: {
      title: "Pasillo 3",
      image: pasillo_3_a,
      pitch: 10,
      yaw: 131,
      hfov: 120,
      hotSpots: [
        {
          type: "custom",
          pitch: -16.15,
          yaw: -157.18,
          cssClass: "spot",
        },
        {
          type: "custom",
          pitch: -16.28,
          yaw: -1.66,
          cssClass: "spot",
        },
        {
          text: "adelante",
          type: "custom",
          pitch: -47,
          yaw: 94,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_3_b");
          },
        },
        {
          text: "Volver a la Entrada",
          type: "custom",
          pitch: -40,
          yaw: -97,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("entrada");
          },
        },
      ],
    },
    pasillo_3_b: {
      title: "Pasillo 3",
      image: pasillo_3_b,
      pitch: -5,
      yaw: 90,
      hfov: 120,
      hotSpots: [
        {
          type: "custom",
          pitch: -16.15,
          yaw: -157.18,
          cssClass: "spot",
        },
        {
          type: "custom",
          pitch: -16.28,
          yaw: -1.66,
          cssClass: "spot",
        },
        {
          text: "adelante",
          type: "custom",
          pitch: -44,
          yaw: 102,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_3_c");
          },
        },
        {
          text: "volver",
          type: "custom",
          pitch: -40,
          yaw: -99,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_3_a");
          },
        },
      ],
    },
    pasillo_3_c: {
      title: "Pasillo 3",
      image: pasillo_3_c,
      pitch: -1.05,
      yaw: -156.73,
      hfov: 120,
      hotSpots: [
        {
          text: "Canastas",
          type: "custom",
          pitch: 8,
          yaw: 116,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          text: "adelante",
          type: "custom",
          pitch: -19,
          yaw: 179,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("final");
          },
        },
        {
          text: "volver",
          type: "custom",
          pitch: -40,
          yaw: -102,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_3_b");
          },
        },
      ],
    },
    final: {
      title: "Final",
      image: final,
      pitch: -1.05,
      yaw: -156.73,
      hfov: 120,
      hotSpots: [
        {
          text: "Canastas",
          type: "custom",
          pitch: 5,
          yaw: -66,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("Grupo A");
          },
        },
        {
          type: "custom",
          pitch: -16.28,
          yaw: -1.66,
          cssClass: "spot",
        },
        {
          text: "Pasillo 2",
          type: "custom",
          pitch: -46,
          yaw: 95,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_2_c");
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
      <Phone ask={ask} answers={answers} numAsk={numAsk} type={typee}/>
      <div id="panorama" className="panorama"></div>
    </div>
  );
}
