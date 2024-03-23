import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";
import MexContext from "../../context/MexContext";
import premiseLogo from "../../assets/premise-logo.png";
import { IconHome } from "../icons/IconHome";
import { useNavigate } from "react-router-dom";
import { mexDataPhone } from "../scene/mexDataPhone";

const PanelResults = ({ setPanelResults }) => {
  const { dataPhone, updateResults, setStartApp, setDataPhone } =
    useContext(MexContext);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const obtenerRepetidos = (array1, array2) => {
    const repetidos = array1.filter((elemento) => array2.includes(elemento));
    return [...new Set(repetidos)];
  };
  const obtenerErroneas = (array1, array2) => {
    const erroneas = array1.filter((elemento) => !array2.includes(elemento));
    return [...new Set(erroneas)];
  };

  const clickClosePanel = (e) => {
    if (e.target.getAttribute("name") == "panel") {
      setPanelResults(false);
    }
  };

  const getRenderResults = () => {
    let dataByASk = dataPhone.map((data) => {
      let resCorrectMarked = obtenerRepetidos(
        data.respuesta_correcta,
        data.respuestas_usuario
      );
      let okAndErrResponses = [
        ...new Set(
          data.respuestas_usuario
            .concat(data.respuesta_correcta, data.respuestas_usuario)
            .filter((fruta) => fruta && fruta.trim() !== "")
        ),
      ];
      let getTypeResponse = okAndErrResponses.map((response) => {
        let type =
          (obtenerRepetidos(
            data.respuesta_correcta,
            data.respuestas_usuario
          ).includes(response)
            ? "correct"
            : "") +
          (obtenerErroneas(
            data.respuestas_usuario,
            data.respuesta_correcta
          ).includes(response)
            ? "error"
            : "");
        return {
          valor: response,
          type: type,
        };
      });
      const calcQuestionResult = () => {
        let correctSelected = obtenerRepetidos(
          data.respuesta_correcta,
          data.respuestas_usuario
        ).length;
        let errorSelected = obtenerErroneas(
          data.respuestas_usuario,
          data.respuesta_correcta
        ).length;

        const normalResult = (
          correctSelected / data.respuesta_correcta.length -
          errorSelected / data.respuesta_correcta.length
        ).toFixed(2);

        let resultWhitoutNegative =
          normalResult > 0
            ? (
                correctSelected / data.respuesta_correcta.length -
                errorSelected / data.respuesta_correcta.length
              ).toFixed(2)
            : 0;
        return resultWhitoutNegative;
      };

      return {
        id: data.id,
        titulo: data.titulo,
        score: calcQuestionResult(),
        numCorrects: data.respuesta_correcta.length,
        numMarked: resCorrectMarked.length,
        respuestas: getTypeResponse,
      };
    });
    return dataByASk;
  };

  const getTotalScore = () => {
    let result = dataPhone.map((data) => {
      let dataScore =
        obtenerRepetidos(data.respuesta_correcta, data.respuestas_usuario)
          .length /
          data.respuesta_correcta.length -
        obtenerErroneas(data.respuestas_usuario, data.respuesta_correcta)
          .length /
          data.respuesta_correcta.length;
      return dataScore > 0 ? dataScore : 0;
    });
    let suma = 0;
    result.forEach((number) => {
      suma += number;
    });
    setScore((suma / 28).toFixed(3) * 10);
  };

  // document.addEventListener("keydown", (e) => {
  //   setPanelResults(false);
  // });

  useEffect(() => {
    updateResults(getRenderResults());
    getTotalScore();
  }, []);

  return (
    <div className="panel-results" name="panel" tabIndex="0">
      <section className="panel-results__container">
        <div className="panel-results__form">
          <h3>
            Resultados del estudio |{" "}
            <figure className="panel-results__form--logo">
              <img src={premiseLogo} alt="Logo premise" />
            </figure>
          </h3>
          <div className="examples">
            <span className="panel-results__form--example correct">
              Respuesta Correcta
            </span>
            <span className="panel-results__form--example error">
              Respuesta Incorrecta
            </span>
            <span className="panel-results__form--example">
              Correcata no marcada
            </span>
          </div>
          <div className="panel-results__box-data">
            <div className="panel-results__data">
              <div className="data">
                {getRenderResults().map((data, i) => {
                  return (
                    <div className="data__data-answer" key={data.id}>
                      <div className="data__box">
                        <p className="data__question">
                          <span>{i + 1 + ". " + data.titulo}</span>
                        </p>

                        <div className="data__respuestas">
                          {data.respuestas.map((posiblesRes, index) => {
                            return (
                              <span
                                className={
                                  "data__respuestas--respuesta " +
                                  posiblesRes.type
                                }
                                key={index}
                              >
                                {posiblesRes.valor}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="data__results">
                        <div className="data__results--pts">
                          <p>Pts.</p>
                          <input type="text" defaultValue={data.score} />
                        </div>
                        <div className="data__results--resume">
                          <div className="resume">
                            <p>Correctas</p>
                            <span>{data.numCorrects}</span>
                          </div>
                          <div className="resume hr">
                            <p>Marcadas</p>
                            <span>{data.numMarked}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="button-container">
            <span className="text">
              <span className="button-lines">
                <div className="button-lines__texto">
                  <p>Resultados:</p>
                  <span> {score.toFixed(2)} / 10</span>
                </div>
                <div className="container">
                  <svg
                    className="svg-icon"
                    height="50"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="50"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z"></path>
                  </svg>
                  <div className="container__star">
                    <div className="star-eight"></div>
                  </div>

                  <div></div>
                </div>
              </span>
            </span>
          </div>
        </div>
        <button
          className="panel-results__container--back"
          onClick={() => {
            setDataPhone(mexDataPhone);
            localStorage.setItem("login", false);
            setStartApp(true);
            navigate("/");
          }}
        >
          Volver <IconHome />
        </button>
      </section>
    </div>
  );
};

export default PanelResults;
