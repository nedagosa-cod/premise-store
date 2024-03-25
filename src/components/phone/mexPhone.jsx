import React, { useContext, useEffect, useRef, useState } from "react";

import imgPhone from "../../assets/img/phone.png";

import "./mexStyle.scss";

import logoPhone from "../../assets/img/360phone.png";

import { useNavigate } from "react-router-dom";
import MexContext from "../../context/MexContext";
import { createPortal } from "react-dom";
import PanelResults from "../PanelResults/PanelResults";
import { IconHome } from "../icons/IconHome";
import { mexDataPhone } from "../scene/mexDataPhone";

export default function MexPhone() {
  const {
    dataPhone,
    activeSegment,
    updateDataPhone,
    setStartApp,
    resetChat,
    setDataPhone,
  } = useContext(MexContext);
  const navigate = useNavigate();

  const [segments, setSegments] = useState([]);
  const [posQuestion, setPosQuestion] = useState(0);
  const [answsSaved, setAnswsSaved] = useState(0);
  const [panelResults, setPanelResults] = useState(false);

  const nextAnswer = (e) => {
    //EXTRAE LOS INPUTS RESPUESTA DEL FORMULARIO
    let inputAnswers = Array.from(
      e.target.parentNode.parentNode.elements
    ).filter((nodo) => {
      return nodo.nodeName == "INPUT";
    });

    // GUARDA LA RESPUESTA DEL USUARIO
    let arrAnswers = [];
    inputAnswers.forEach((checkbox) => {
      if (checkbox.checked) {
        arrAnswers.push(checkbox.name);
      }
    });

    // ELIMINA EL FOCUS NARANJA Y EL CHECKED DE CADA INPUT
    Array.from(e.target.parentNode.parentNode.elements).forEach((input) => {
      input.checked = false;
      input.parentNode.classList.remove("active");
    });
    // SI HAY RESPUESTAS ACTUALIZO LAS MISMAS
    if (arrAnswers.length != 0) {
      if (answsSaved == dataPhone.length - 26) {
        setPanelResults(true);
      }
      updateDataPhone(segments[posQuestion].id, arrAnswers);
      setAnswsSaved((prevPos) => prevPos + 1);
    } else {
      posQuestion < segments.length - 1
        ? setPosQuestion((preveData) => preveData + 1)
        : setPosQuestion(0);
    }
  };

  const createSegment = () => {
    console.log(dataPhone);
    console.log(posQuestion);
    console.log(activeSegment);

    let segmentosDecteados = dataPhone.filter(
      (segment) =>
        segment.segmento === activeSegment && segment.status == undefined
    );

    dataPhone.forEach((segment) => {
      console.log(segment.segmento);
      console.log(segment.status);
    });

    console.log(segmentosDecteados);
    setPosQuestion(0);
    setSegments(segmentosDecteados);
  };

  const activeAnswer = (event) => {
    if (event.target.nodeName == "LABEL") {
      event.target.classList.toggle("active");
    }
  };

  useEffect(() => {
    createSegment();
  }, [dataPhone, activeSegment]);
  return (
    <article className="phone-mex">
      <div className="questions">
        <form className="questions__inner">
          <div className="header">
            <button
              className="prev-next-button"
              name="prev"
              type="button"
              onClick={(e) => {
                nextAnswer(e);
              }}
            >
              ←
            </button>
            <p>Outlet environment and operat...</p>
            <button
              className="responsive-button"
              type="button"
              onClick={(e) => {
                e.target.parentNode.parentNode.parentNode.classList.toggle(
                  "rs"
                );
              }}
            >
              Activador
            </button>
            <button
              className="prev-next-button"
              name="next"
              onClick={(e) => {
                nextAnswer(e);
              }}
              type="button"
            >
              →
            </button>
          </div>

          <div className="mid">
            {segments && (
              <div>
                {segments[posQuestion] && (
                  <>
                    <p className="pregunta">{segments[posQuestion].titulo}</p>
                  </>
                )}
                <div
                  className={
                    "respuestas " +
                    (segments[posQuestion]?.tipo == "foto" ? "foto" : "")
                  }
                >
                  {segments[posQuestion]?.tipo == "foto" && (
                    <figure>
                      <img
                        src={
                          "/src/assets/iconScenes/" +
                          segments[posQuestion]?.namePhoto +
                          ".jpg"
                        }
                        alt="Foto ejemplo"
                      />
                    </figure>
                  )}
                  <div className="rescontainer">
                    {segments[posQuestion] &&
                      segments[posQuestion].posibles_respuestas.map(
                        (mapRespuesta, i) => {
                          return (
                            <React.Fragment key={i}>
                              <label
                                className={"multisel"}
                                onClick={(e) => {
                                  activeAnswer(e);
                                }}
                              >
                                <input type="checkbox" name={mapRespuesta} />
                                {mapRespuesta}
                              </label>
                            </React.Fragment>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            )}
            {segments.length == 0 && (
              <div className={"phone-home "}>
                <figure>
                  <img src={logoPhone} alt="Logo 360" />
                </figure>
                <p>Seleccionar puntero para generar pregunta!</p>
              </div>
            )}
          </div>

          <div className="backhome">
            <button
              className="button"
              type="button"
              onClick={() => {
                setDataPhone(mexDataPhone);
                localStorage.setItem("login", false);
                resetChat();
              }}
            >
              <IconHome />
            </button>
          </div>
        </form>
      </div>

      <figure className="imgPhone">
        <img src={imgPhone} alt="phone" />
      </figure>
      {panelResults &&
        createPortal(
          <PanelResults setPanelResults={setPanelResults} />,
          document.body
        )}
    </article>
  );
}
