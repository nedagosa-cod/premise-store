import "animate.css";
import "./styles.scss";
import logoPremise from "../../assets/img/premise.webp";
import { useContext, useRef, useState } from "react";
import MexContext, { MexProvider } from "../../context/MexContext";

export default function Preload() {
  const { setUserData, userData } = useContext(MexContext);
  const refExit = useRef();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const updateFormData = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const sendUserData = (e) => {
    // console.log(e.target.elements);
    e.preventDefault();
    let inputsData = Array.from(e.target.elements);
    let dataInputs = inputsData
      .filter((element) => element.nodeName == "INPUT")
      .map((el) => {
        console.log(el);
        return {
          clave: el.name,
          valor: el.value,
        };
      });

    const data = dataInputs.reduce((acc, item) => {
      acc[item.clave] = item.valor;
      return acc;
    }, {});
    setUserData(data);
    setTimeout(() => {
      e.target.parentNode.classList.add("animate__slideOutUp");
    }, 100);
    // startConversation();
  };

  return (
    <section className="preload animate__animated">
      <form className="elements" onSubmit={sendUserData}>
        <div className="elements__title">
          <span>Store 360° | </span>
          <figure>
            <img src={logoPremise} alt="logo" />
          </figure>
          <p className="elements__p">
            Para iniciar recorrido porfavor completa los campos.
          </p>
        </div>
        <div className="input-container">
          <input
            className="input"
            name="id"
            type="text"
            autoComplete="off"
            value={formData.id}
            onChange={updateFormData}
          />
          <label className="label" htmlFor="input">
            Número de documento
          </label>
          <div className="topline"></div>
          <div className="underline"></div>
        </div>
        <div className="input-container">
          <input
            className="input"
            name="name"
            type="text"
            autoComplete="off"
            value={formData.name}
            onChange={updateFormData}
          />
          <label className="label" htmlFor="input">
            Nombre Completo
          </label>
          <div className="topline"></div>
          <div className="underline"></div>
        </div>
        <div className="input-container">
          <input
            className="input"
            name="email"
            type="email"
            autoComplete="off"
            value={formData.email}
            onChange={updateFormData}
          />
          <label className="label" htmlFor="input">
            Correo
          </label>
          <div className="topline"></div>
          <div className="underline"></div>
        </div>

        <div className="elements__buttons">
          <div className="button-borders">
            <button
              className="primary-button"
              // onClick={() => {
              //   startConversation();
              // }}
            >
              Iniciar Recorrido
            </button>
          </div>
          <div
            className="button-borders"
            onClick={(e) => {
              e.preventDefault();
              console.log(userData);
            }}
          >
            <button className="primary-button">Ver Resultados</button>
          </div>
        </div>
      </form>
    </section>
  );
}
