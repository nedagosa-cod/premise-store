import "animate.css";
import "./styles.scss";
import logoPremise from "../../assets/img/premise.webp";
import { useContext, useState } from "react";
import MexContext from "../../context/MexContext";
import { useForm } from "react-hook-form";

export default function Preload() {
  const { setUserData, userData } = useContext(MexContext);
  const { register, handleSubmit } = useForm();
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

  const onSubmitForm = handleSubmit((data, e) => {
    e.preventDefault();
    setUserData(data);
    setTimeout(() => {
      e.target.parentNode.classList.add("animate__slideOutUp");
    }, 100);
  });
  return (
    <section className="preload animate__animated">
      <form className="elements" onSubmit={onSubmitForm}>
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
            {...register("name")}
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
            {...register("id")}
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
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no valido",
              },
            })}
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
            <button className="primary-button" type="submit">
              Iniciar Recorrido
            </button>
          </div>
          <div className="button-borders">
            <button className="primary-button" type="button">
              Ver Resultados
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
