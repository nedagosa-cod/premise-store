import React, { useContext, useEffect, useState } from "react";

import imgPhone from "../../assets/img/phone.png";

import "./mexStyle.scss";

import logoPhone from "../../assets/img/360phone.png";

import { Link } from "react-router-dom";
import MexContext from "../../context/MexContext";

export default function MexPhone() {
  const { dataPhone } = useContext(MexContext);

  const [activeSegment, setActiveSegment] = useState("punto");
  const [segments, setSegments] = useState([]);
  const [posQuestion, setPosQuestion] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState([]);

  const saveAnswer = (event) => {
    console.log("respuesta guarda");
  };
  const prevAnswer = () => {
    posQuestion < segments.length - 1
      ? setPosQuestion((preveData) => preveData + 1)
      : setPosQuestion(0);
  };

  const createSegment = () => {
    let segmentosDecteados = dataPhone.filter(
      (segment) => segment.segmento === activeSegment
    );
    setSegments(segmentosDecteados);
  };

  useEffect(() => {
    createSegment();
  }, []);
  return (
    <>
      <article className="phone-mex">
        <div className="questions">
          <form
            className="questions__inner"
            onSubmit={(e) => {
              saveAnswer(e);
            }}
          >
            <div className="header">
              <button onClick={prevAnswer}>←</button>
              <p>Outlet environment and operat...</p>
              <button onClick={prevAnswer}>→</button>
            </div>

            <div className="mid">
              {activeSegment && (
                <div>
                  {segments[posQuestion] && (
                    <p className="pregunta">{segments[posQuestion].titulo}</p>
                  )}
                  <div className="respuestas">
                    <div className="rescontainer">LUGAR DE RESPUESTAS</div>
                  </div>
                </div>
              )}
              {!activeSegment && (
                <div className={"phone-home "}>
                  <figure>
                    <img src={logoPhone} alt="Logo 360" />
                  </figure>
                  <p>Seleccionar puntero para generar pregunta!</p>
                </div>
              )}
            </div>

            <div className="backhome">
              <Link to="/" className="button">
                ⌂
              </Link>
            </div>
          </form>
        </div>

        <figure className="imgPhone">
          <img src={imgPhone} alt="phone" />
        </figure>
      </article>
    </>
  );
}
