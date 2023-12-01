import Swal from "sweetalert2";
import React from "react";

import imgPhone from "../../assets/img/phone.png";
import { formData } from "../scene/mexDataPhone";
import "./mexStyle.scss";

import imgDetergente from "../../assets/iconScenes/mexImgDetergentes.jpg";
import imgPepsi from "../../assets/iconScenes/mexImgPepsi.jpg";
import logoPhone from "../../assets/img/360phone.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Phone(props) {
  const [hide, setHide] = useState("");
  const [attrs, setAttrs] = useState(props);
  const [respuestas, setRespuestas] = useState([]);
  const [contador, setContador] = useState(0);
  const [segmento, setSegmento] = useState(props.activeSegment);

  const changeAskOn = () => {
    props.changeAsk(segmento);
  };
  const changeAskOnBack = () => {
    props.changeAskBack(segmento);
  };

  const manejarRespuesta = (pregunta, resp, id) => {
    let local = JSON.parse(localStorage.getItem("data"));
    setRespuestas([...local, { id, pregunta, resp }]);
  };

  const takePhoto = (photo) => {
    const imgs = {
      imgDetergente,
      imgPepsi,
    };
    Swal.fire({
      imageUrl: imgs[photo],
      imageHeight: 600,
      imageWidth: 600,
      backdrop: `rgba(0,0,40,0.4)`,
      background: "rgba(0,0,0,0.0)",
      width: "90%",
      imageAlt: "Custom image",
      confirmButtonText: "Confirmar",
    });
  };

  const popCorrectAnswers = (dataLocal) => {
    const createPop = () => {
      let html = "";
      for (let index = 0; index < dataLocal.length; index++) {
        const element = dataLocal[index];
        const sameAsk = formData.filter(
          (elemento) => elemento.id == element.id
        );
        if (sameAsk) {
          let arrRespUser = element.resp;
          let arrRespOk = sameAsk[0].respuesta_correcta;

          let resCorrect = arrRespUser.filter((resUser) =>
            arrRespOk.includes(resUser)
          );

          html += `
                  <div class="popContent">
                        <div class="askQuestions">
                                    <div class="popContent-data">
                                          <span>${element.pregunta}</span>
                                    </div>
                              
                                    <div class="popContent-res">
                                    ${element.resp
                                    .map((dat) => {
                                    return `<span class="respuesta ${
                                          sameAsk[0].respuesta_correcta.includes(dat)
                                          ? "correct"
                                          : "incorrect"
                                    }">${dat}</span>`;
                                    })
                                    .join("")}
                                    </div>
                        </div>
                        <div class="results">
                              <span>${resCorrect.length + "/" + arrRespOk.length}</span>
                              <p>Pts.${((resCorrect.length / arrRespOk.length) * 10).toFixed(2)}</p>
                        </div>
                  </div>
                  `;
        }
      }
      return html;
    };

    const createFooter = () => {
      let footer = "";
      let sumaRes = 0
      for (let index = 0; index < dataLocal.length; index++) {
            const element = dataLocal[index];
            const sameAsk = formData.filter((elemento) => elemento.id == element.id);
            if (sameAsk) {
              let arrRespUser = element.resp;
              let arrRespOk = sameAsk[0].respuesta_correcta;
    
              let resCorrect = arrRespUser.filter((resUser) =>arrRespOk.includes(resUser));

              sumaRes += Number(((resCorrect.length / arrRespOk.length) * 10).toFixed(2))
            }
      }
      footer += `
            <div>
                  <h2>Nota</h2>
                  <span>${(sumaRes/4).toFixed(1)}/10</span>
            </div>
      `
          return footer;
    }

    Swal.fire({
      title: "Resultados",
      html: createPop(),
      footer: createFooter(),
      icon: "question",
      width: "80%",
      confirmButtonText: "Aceptar",
      allowEscapeKey: false,
      allowOutsideClick: false,
      customClass: {
        htmlContainer: "myswal-html",
      },
    });
  };

  const saveAnswer = (e) => {
    e.preventDefault();
    let controlers = Array.from(e.target.elements);
    let checkboxMarcado = false;

    for (let i = 0; i < controlers.length; i++) {
      if (controlers[i].type == "checkbox" && controlers[i].checked) {
        checkboxMarcado = true;
        break;
      }
    }

    if (checkboxMarcado) {
      setContador(contador + 1);
      let answers = [];
      controlers.forEach((element) => {
        let answer = element.name;
        if (element.checked) {
          answers.push(answer);
        }
      });

      manejarRespuesta(props.ask, answers, props.numAsk);

      if (contador > 23) {
        let dataSaved = JSON.parse(localStorage.getItem("data"));
        popCorrectAnswers(dataSaved);
      }
      props.resetPhone();
      localStorage.clear();
      setAttrs([]);
      setHide("");
    }
    changeAskOn()
  };

  const activeCheckbox = (e) => {
    e.target.parentNode.classList.toggle("active");
  };

  useEffect(() => {
    setAttrs(props);
    setSegmento(props.activeSegment);
    document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
      el.checked ? el.click() : '';
    });
    
    props.ask ? setHide("hide") : setHide("");
    localStorage.setItem("data", JSON.stringify(respuestas));
    console.log('saved')
  }, [props.ask, respuestas]);
  return (
    <>
      <article className="phone-mex">
        <div className="questions">
          <form className="questions__inner"
              onSubmit={saveAnswer}
              id={"form" + attrs.numAsk}
          >
            <div className="backhome">
                <Link to="/" className="button">⌂</Link>
              </div>
            <div className="header">
              <button onClick={changeAskOnBack}>←</button>
              <p>Outlet environment and operat...</p>
              <button type="submit">→</button>
            </div>
            <div className="mid">
              <p id="elPregunta" className="pregunta">
                {attrs.ask ? attrs.ask : ""}
              </p>
              <div
                className="respuestas"
              >
                <div className="rescontainer">
                  {attrs.answers?.map((res, i) => {
                    let dataId = props.numAsk + "_" + i;
                    switch (props.type) {
                      case "multiseleccion": {
                        return (
                          <React.Fragment key={i}>
                            <label htmlFor={'input'+dataId} className="multisel">
                              <input
                                type="checkbox"
                                name={res}
                                id={'input'+dataId}
                                onChange={activeCheckbox}
                              />
                              {res}
                            </label>
                          </React.Fragment>
                        );
                      }
                      case "foto": {
                        return (
                          <div key={i} className="foto">
                            <button
                              className="cam-button"
                              type="button"
                              onClick={() => {
                                takePhoto(res);
                              }}
                            >
                              <svg
                                id="_12"
                                data-name="12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 170.31 127.77"
                              >
                                <path
                                  className="cls-1"
                                  d="m11.02,23.23c-2.28.21-4.29,1.26-5.76,2.87-1.42,1.57-2.33,3.74-2.33,6.06v83.69c0,2.47,1.02,4.75,2.64,6.37s3.88,2.62,6.36,2.62h146.47c2.47,0,4.7-1.01,6.36-2.62,1.61-1.61,2.62-3.89,2.62-6.37V32.17c0-2.32-.9-4.49-2.37-6.06-1.41-1.62-3.43-2.67-5.7-2.87h-39.9l-.25-1.21-2.68-13.63c-.3-1.62-1.16-2.98-2.32-3.94-1.11-.97-2.57-1.52-4.2-1.52h-49.64c-1.57,0-3.04.55-4.2,1.52-1.16.95-1.97,2.32-2.32,3.94l-2.62,13.63-.25,1.21H11.02Zm-7.88.91c1.98-2.12,4.7-3.59,7.73-3.84h37.62l2.47-12.47c.46-2.28,1.62-4.25,3.29-5.6,1.67-1.42,3.78-2.22,6.06-2.22h49.64c2.28,0,4.45.8,6.12,2.22,1.61,1.36,2.83,3.33,3.29,5.6l2.41,12.47h37.68c3.04.25,5.76,1.71,7.73,3.84,1.92,2.11,3.13,4.95,3.13,8.03v83.69c0,3.28-1.37,6.26-3.49,8.43-2.17,2.18-5.15,3.49-8.43,3.49H11.92c-3.28,0-6.26-1.31-8.43-3.49-2.18-2.17-3.49-5.15-3.49-8.43V32.17c0-3.08,1.21-5.91,3.13-8.03h0Zm82.02,10.4c2.62,0,5.2.25,7.68.76,2.57.51,5.06,1.26,7.42,2.28l1.27.5v.05c1.92.86,3.78,1.92,5.55,3.08,2.12,1.47,4.14,3.08,5.97,4.9h0l.04.04c1.82,1.82,3.44,3.8,4.9,5.97,1.16,1.77,2.22,3.63,3.08,5.55h.05l.5,1.26c1.01,2.38,1.77,4.86,2.28,7.43.5,2.47.76,5.06.76,7.68s-.26,5.19-.76,7.68c-.51,2.57-1.27,5.04-2.28,7.42l-.55,1.31h0c-.91,1.92-1.92,3.74-3.08,5.51-1.47,2.13-3.08,4.14-4.9,5.96l-.04.05h0c-1.82,1.82-3.84,3.44-5.97,4.9-1.77,1.16-3.63,2.17-5.55,3.08v.05l-1.27.5c-2.37,1.01-4.85,1.77-7.42,2.28-2.47.5-5.05.76-7.68.76s-5.21-.26-7.68-.76c-2.58-.51-5.05-1.27-7.42-2.28l-1.37-.55h.04c-1.92-.91-3.79-1.92-5.5-3.08-2.17-1.47-4.14-3.08-5.96-4.9l-.04-.05h0c-1.82-1.81-3.49-3.83-4.9-5.96-1.16-1.77-2.17-3.59-3.08-5.51h0l-.55-1.31c-1.02-2.38-1.77-4.85-2.28-7.42-.51-2.49-.76-5.06-.76-7.68s.25-5.2.76-7.68c.51-2.57,1.26-5.05,2.28-7.43l.5-1.31.05.05c.86-1.98,1.92-3.79,3.08-5.55,1.41-2.17,3.08-4.14,4.9-5.97v-.04h.04c1.82-1.82,3.8-3.44,5.96-4.9,1.77-1.16,3.58-2.17,5.5-3.08h0l1.32-.55c2.37-1.02,4.84-1.77,7.42-2.28,2.47-.51,5.05-.76,7.68-.76h0Zm7.12,3.63c-2.33-.46-4.71-.7-7.12-.7s-4.85.25-7.13.7c-2.07.41-4.09,1.02-6.01,1.72l-.86.35c-2.22.91-4.35,2.07-6.31,3.38-1.97,1.31-3.84,2.89-5.55,4.56h0c-1.67,1.71-3.24,3.58-4.55,5.55-1.31,1.96-2.47,4.09-3.38,6.31l-.3.76c-.75,1.97-1.36,3.99-1.76,6.11-.46,2.28-.71,4.69-.71,7.12s.26,4.79.71,7.11c.4,2.07,1.01,4.1,1.71,6.02l.35.86c.91,2.22,2.07,4.34,3.38,6.31,1.31,1.98,2.89,3.84,4.55,5.55h0c1.71,1.67,3.58,3.23,5.55,4.55,1.96,1.31,4.09,2.43,6.31,3.38l.86.36c1.92.71,3.94,1.31,6.01,1.71,2.28.46,4.7.71,7.13.71s4.79-.25,7.12-.71c2.12-.4,4.14-1.01,6.11-1.77l.76-.3c2.22-.95,4.34-2.07,6.31-3.38,1.98-1.31,3.84-2.88,5.51-4.55h.04c1.67-1.71,3.19-3.58,4.55-5.55,1.32-1.97,2.43-4.09,3.38-6.31l.36-.86c.71-1.92,1.31-3.95,1.71-6.02.46-2.32.71-4.69.71-7.11s-.26-4.85-.71-7.12c-.4-2.12-1.01-4.14-1.77-6.07l-.3-.8c-.95-2.22-2.06-4.35-3.38-6.31-1.36-1.97-2.88-3.84-4.55-5.55h-.04c-1.67-1.67-3.53-3.24-5.51-4.56-1.98-1.31-4.09-2.47-6.31-3.38l-.86-.35c-1.92-.7-3.93-1.31-6.01-1.72h0ZM24.75,28.78c2.37,0,4.54.97,6.12,2.53,1.56,1.57,2.52,3.69,2.52,6.06s-.95,4.54-2.52,6.1c-1.57,1.58-3.74,2.53-6.12,2.53s-4.49-.95-6.06-2.53c-1.56-1.56-2.53-3.73-2.53-6.1s.96-4.49,2.53-6.06c1.57-1.56,3.69-2.53,6.06-2.53h0Zm4.05,4.6c-1.01-1.06-2.47-1.67-4.05-1.67s-2.98.61-3.99,1.67c-1.06,1.01-1.66,2.43-1.66,3.99s.6,3.03,1.66,4.03c1.01,1.02,2.43,1.67,3.99,1.67s3.04-.65,4.05-1.67c1.01-1.01,1.66-2.47,1.66-4.03s-.65-2.98-1.66-3.99h0Zm73.43,23.53c-1.12-1.11-2.38-2.17-3.69-3.03-1.26-.86-2.68-1.61-4.14-2.22-1.41-.61-2.93-1.06-4.49-1.37-1.52-.3-3.13-.46-4.75-.46s-3.23.15-4.75.46c-1.62.3-3.14.76-4.54,1.37-1.41.61-2.83,1.37-4.14,2.22-1.31.86-2.53,1.92-3.69,3.03-1.11,1.16-2.17,2.37-3.03,3.69-.86,1.31-1.62,2.73-2.22,4.14-.61,1.47-1.06,2.93-1.37,4.54-.3,1.52-.46,3.08-.46,4.75s.15,3.23.46,4.75c.3,1.56.76,3.08,1.37,4.49.61,1.46,1.37,2.88,2.22,4.14.86,1.31,1.92,2.57,3.03,3.73,1.16,1.12,2.37,2.12,3.69,3.03,1.31.86,2.73,1.62,4.14,2.22,1.41.55,2.93,1.06,4.54,1.37,1.52.3,3.08.45,4.75.45s3.23-.14,4.75-.45c1.56-.3,3.08-.81,4.49-1.37,1.46-.61,2.88-1.37,4.14-2.22,1.31-.91,2.57-1.92,3.69-3.03s2.17-2.42,3.08-3.73c.86-1.26,1.62-2.68,2.22-4.14.55-1.41,1.06-2.93,1.37-4.49.3-1.52.46-3.14.46-4.75s-.16-3.23-.46-4.75c-.3-1.61-.81-3.08-1.37-4.54-.61-1.41-1.37-2.83-2.22-4.14-.91-1.31-1.92-2.53-3.08-3.69h0Zm-2.01-5.46c1.46,1.01,2.87,2.18,4.09,3.38,1.26,1.27,2.42,2.68,3.44,4.14.95,1.46,1.81,3.02,2.47,4.65.65,1.61,1.21,3.33,1.51,5.09.35,1.71.56,3.48.56,5.3s-.21,3.58-.56,5.3c-.3,1.77-.86,3.43-1.51,5.05-.67,1.66-1.52,3.23-2.47,4.7-1.02,1.46-2.18,2.87-3.44,4.09-1.21,1.26-2.62,2.42-4.09,3.43-1.47.97-3.04,1.82-4.7,2.49-1.62.65-3.29,1.2-5.05,1.5-1.71.36-3.48.57-5.3.57s-3.59-.21-5.3-.57c-1.77-.3-3.48-.86-5.1-1.5-1.62-.66-3.19-1.52-4.65-2.49-1.46-1.01-2.87-2.17-4.14-3.43-1.21-1.21-2.38-2.62-3.38-4.09-.95-1.47-1.81-3.04-2.47-4.7-.71-1.63-1.21-3.29-1.56-5.05-.3-1.72-.51-3.49-.51-5.3s.21-3.59.51-5.3c.35-1.77.86-3.48,1.56-5.09.66-1.63,1.52-3.19,2.47-4.65,1.01-1.47,2.17-2.88,3.38-4.14,1.27-1.2,2.68-2.38,4.14-3.38,1.46-.96,3.04-1.82,4.65-2.47,1.62-.7,3.33-1.21,5.1-1.56,1.71-.3,3.48-.51,5.3-.51s3.59.21,5.3.51c1.77.35,3.43.86,5.05,1.56,1.66.65,3.23,1.52,4.7,2.47h0Z"
                                />
                              </svg>
                              <p>Tomar Foto</p>
                            </button>
                            <input type="checkbox" name={res} checked onChange={activeCheckbox}/>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
                {/* <button className={"send " + hide} type="submit">
                  Enviar
                </button> */}
              </div>
              <div className={"phone-home " + hide}>
                <figure>
                  <img src={logoPhone} alt="Logo 360" />
                </figure>
                <p>Seleccionar puntero para generar pregunta!</p>
              </div>
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
