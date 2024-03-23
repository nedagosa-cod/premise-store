import "animate.css";
import "./styles.scss";
import logoPremise from "../../assets/img/premise.webp";
import { useContext, useState } from "react";
import MexContext from "../../context/MexContext";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

export default function Preload() {
  const { setUserData } = useContext(MexContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    mail: "",
  });

  const validateAtLeastTwoFields = (value, allValues) => {
    const fields = [allValues.name, allValues.id, allValues.mail];
    const filledFields = fields.filter((field) => field && field.trim() !== "");

    return filledFields.length >= 2;
  };

  const updateFormData = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    setUserData(data);
    localStorage.setItem("login", true);
    setTimeout(() => {
      e.target.parentNode.classList.add("animate__slideOutUp");
    }, 100);
  };
  return (
    <section className="preload animate__animated">
      <form className="elements" onSubmit={handleSubmit(onSubmitForm)}>
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
            {...register("name", { validate: validateAtLeastTwoFields })}
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
            {...register("id", { validate: validateAtLeastTwoFields })}
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
            {...register("mail", {
              // pattern: {
              //   value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              //   message: "Correo no valido",
              // },
              validate: validateAtLeastTwoFields,
            })}
            type="text"
            autoComplete="off"
            value={formData.mail}
            onChange={updateFormData}
          />
          <label className="label" htmlFor="input">
            Correo
          </label>
          <div className="topline"></div>
          <div className="underline"></div>
        </div>
        {errors.name && <p>Debes completar minimo 2 campos.</p>}
        <div className="elements__buttons">
          <div className="button-borders">
            <button className="primary-button" type="submit">
              Iniciar Recorrido
            </button>
          </div>
          <div className="button-borders">
            <button
              className="primary-button"
              type="button"
              onClick={() => {
                navigate("/scores");
              }}
            >
              Ver Resultados
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
