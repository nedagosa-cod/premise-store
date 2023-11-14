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
    pasillo_1_a: {
      title: "Pasillo 1",
      image: pasillo_1_a,
      pitch: -13.35,
      yaw: 87.93,
      hfov: 120,
      hotSpots: [
        {
          text: "Foto",
          type: "custom",
          pitch: -10,
          yaw: -168,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("Img_postobon");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 14,
          yaw: 168,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("postobon");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 10,
          yaw: -109,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("cocacola");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 47,
          yaw: 160,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("no alcohol");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -2,
          yaw: 26,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
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
          text: "Canastas",
          type: "custom",
          pitch: -6,
          yaw: 50,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("hogar");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 8,
          yaw: -7,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
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
          text: "Canastas",
          type: "custom",
          pitch: -2,
          yaw: 169,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("hogar");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -24,
          yaw: 97,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("hogar");
          },
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
            resABCD("cofiteria");
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
          text: "Canastas",
          type: "custom",
          pitch: 18,
          yaw: -167,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 2,
          yaw: 15,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
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
          pitch: -4,
          yaw: -76,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("hogar");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -10,
          yaw: 8,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 49,
          yaw: 21,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: 13,
          yaw: -168,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -33,
          yaw: 57,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
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
          text: "Canastas",
          type: "custom",
          pitch: -5,
          yaw: 138,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
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
          text: "Canastas",
          type: "custom",
          pitch: 47,
          yaw: 175,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("cofiteria");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -7,
          yaw: -162,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("alimentos");
          },
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
            resABCD("personal");
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
          text: "Foto",
          type: "custom",
          pitch: 19,
          yaw: -87,
          cssClass: "foto",
          clickHandlerFunc: () => {
            resABCD("Img_aseo_personal");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -9,
          yaw: 20,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("hogar");
          },
        },
        {
          text: "Canastas",
          type: "custom",
          pitch: -6,
          yaw: -76,
          cssClass: "spot",
          clickHandlerFunc: () => {
            resABCD("personal");
          },
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
        {
          text: "Pasillo 3",
          type: "custom",
          pitch: -33,
          yaw: -163,
          cssClass: "m-spot",
          clickHandlerFunc: () => {
            changeScene("pasillo_3_c");
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
