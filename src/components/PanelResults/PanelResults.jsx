import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";
import MexContext from "../../context/MexContext";
import premiseLogo from "../../assets/premise-logo.png";
const PanelResults = ({ setPanelResults }) => {
  const { dataPhone } = useContext(MexContext);
  const [score, setScore] = useState(0);
  const obtenerRepetidos = (array1, array2) => {
    const repetidos = array1.filter((elemento) => array2.includes(elemento));
    return [...new Set(repetidos)];
  };
  const obtenerErroneas = (array1, array2) => {
    const erroneas = array1.filter((elemento) => !array2.includes(elemento));
    return [...new Set(erroneas)];
  };
  const getResults = () => {
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
  const clickClosePanel = (e) => {
    if (e.target.getAttribute("name") == "panel") {
      setPanelResults(false);
    }
  };
  document.addEventListener("keydown", (e) => {
    setPanelResults(false);
  });
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div
      className="panel-results"
      name="panel"
      tabIndex="0"
      onClick={(e) => {
        clickClosePanel(e);
      }}
    >
      <section className="panel-results__form">
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
              {dataPhone.map((data, i) => {
                return (
                  <div className="data__data-answer" key={data.id}>
                    <div className="data__box">
                      <p className="data__question">
                        <span>{i + 1 + ". " + data.titulo}</span>
                      </p>

                      <div className="data__respuestas">
                        {[
                          ...new Set(
                            data.respuestas_usuario
                              .concat(
                                data.respuesta_correcta,
                                data.respuestas_usuario
                              )
                              .filter((fruta) => fruta && fruta.trim() !== "")
                          ),
                        ].map((posiblesRes, i) => {
                          return (
                            <span
                              className={
                                "data__respuestas--respuesta " +
                                (obtenerRepetidos(
                                  data.respuesta_correcta,
                                  data.respuestas_usuario
                                ).includes(posiblesRes)
                                  ? "correct"
                                  : "") +
                                (obtenerErroneas(
                                  data.respuestas_usuario,
                                  data.respuesta_correcta
                                ).includes(posiblesRes)
                                  ? "error"
                                  : "")
                              }
                              key={i}
                            >
                              {posiblesRes}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="data__results">
                      <div className="data__results--pts">
                        <p>Pts.</p>
                        <span>
                          {(
                            obtenerRepetidos(
                              data.respuesta_correcta,
                              data.respuestas_usuario
                            ).length /
                              data.respuesta_correcta.length -
                            obtenerErroneas(
                              data.respuestas_usuario,
                              data.respuesta_correcta
                            ).length /
                              data.respuesta_correcta.length
                          ).toFixed(2) > 0
                            ? (
                                obtenerRepetidos(
                                  data.respuesta_correcta,
                                  data.respuestas_usuario
                                ).length /
                                  data.respuesta_correcta.length -
                                obtenerErroneas(
                                  data.respuestas_usuario,
                                  data.respuesta_correcta
                                ).length /
                                  data.respuesta_correcta.length
                              ).toFixed(2)
                            : 0}
                        </span>
                      </div>
                      <div className="data__results--resume">
                        <div className="resume">
                          <p>Correctas</p>
                          <span>{data.respuesta_correcta.length}</span>
                        </div>
                        <div className="resume hr">
                          <p>Marcadas</p>
                          <span>
                            {
                              obtenerRepetidos(
                                data.respuesta_correcta,
                                data.respuestas_usuario
                              ).length
                            }
                          </span>
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
      </section>
    </div>
  );
};

export default PanelResults;
