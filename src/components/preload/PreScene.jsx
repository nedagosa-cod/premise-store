import "animate.css";
import "./styles.scss";
import iconPointer from "../../assets/iconScenes/produClick.png";
import iconNext from "../../assets/iconScenes/nextScene.png";
import iconCapture from "../../assets/iconScenes/captureScreen.png";
import { useEffect } from "react";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";

const PreScene = ({ typeCartel }) => {
  let htmlSwal = () => {
    return (
      <>
        <div>
          <figure>
            <img src={iconPointer} alt="Mostrar Preguntas" />
          </figure>
          <span>Mostrar Preguntas</span>
        </div>
        <div>
          <figure>
            <img src={iconNext} alt="Puntero Para ir a Siguiente Escena" />
          </figure>
          <span>Avanzar Posición</span>
        </div>
        <div>
          <figure>
            <img src={iconCapture} alt="Puntero Para Tomar Foto" />
          </figure>
          <span>Realizar Foto Evidencia</span>
        </div>
        <div className="footer-instruction">
          <span>
            Usa click derecho{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z" />
            </svg>{" "}
            para selccionar los productor o moverte por los pasillos, manten
            presionado el click derecho para ubicar la vista{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
            </svg>
          </span>
        </div>
      </>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (typeCartel == "animate__slideOutUp") {
        Swal.fire({
          icon: "question",
          title: "Información de uso",
          width: 600,
          html: ReactDOMServer.renderToString(htmlSwal()),
          confirmButtonColor: "#ff5b4a",
          confirmButtonText: "Entendido",
          customClass: {
            htmlContainer: "informacion",
            title: "myswal-title",
            confirmButton: "myswal-button-confirm",
            icon: "myswal-icon",
          },
        });
      }
    }, 2100);
  });
  return (
    <section
      className={
        "preload animate__animated " + typeCartel + " animate__delay-1s"
      }
    ></section>
  );
};

export default PreScene;
