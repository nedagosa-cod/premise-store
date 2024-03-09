import React, { useContext, useState } from "react";
import "./styles.scss";
import MexContext from "../../context/MexContext";
const PanelResults = () => {
  const { dataPhone } = useContext(MexContext);
  const [resUsuario, setResUsuario] = useState("");
  const [resCorrectas, setResCorrectas] = useState("");
  return (
    <div className="panel-results">
      <section className="panel-results__form">
        <h3>Resultado del estudio</h3>
        <div className="panel-results__data">
          <div className="data">
            {dataPhone.map((data, j) => {
              return (
                <div className="data__box" key={data.id}>
                  <p className="data__question">
                    <span>{data.titulo}</span>
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
                      const obtenerRepetidos = (array1, array2) => {
                        const repetidos = array1.filter((elemento) =>
                          array2.includes(elemento)
                        );
                        return [...new Set(repetidos)];
                      };
                      const obtenerErroneas = (array1, array2) => {
                        const erroneas = array1.filter(
                          (elemento) => !array2.includes(elemento)
                        );
                        return [...new Set(erroneas)];
                      };
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
              );
            })}

            {/* <p className="data__question">
              <span>¿A qué canal corresponde este punto de venta?</span>
            </p>
            <div className="data__respuestas">
              <span className="data__respuestas--respuesta">
                Dato a respuesta
              </span>
              <span className="data__respuestas--respuesta">
                Dato a respuesta
              </span>
              <span className="data__respuestas--respuesta">
                Dato a respuesta
              </span>
              <span className="data__respuestas--respuesta">
                Dato a respuesta
              </span>
              <span className="data__respuestas--respuesta">
                Dato a respuesta
              </span>
              <span className="data__respuestas--respuesta">
                Dato a respuesta
              </span>
            </div> */}
          </div>
        </div>
        <div className="panel-results__results">Calificaciones</div>
      </section>
    </div>
  );
};

export default PanelResults;
