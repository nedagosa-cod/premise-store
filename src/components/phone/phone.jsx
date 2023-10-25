import imgPhone from '../../assets/img/phone.png'
import './styles.scss'

export default function Phone(props) {
  return (
    <>
      <article className="phone">
        <div className="questions">
          <div className="questions__inner">
            <h1>Formulario de Preguntas</h1>
            <p id='elPregunta' className='pregunta'>{props.ask}</p>
            <div id='formRespuestas' className='respuestas'>
                  {props.answers.map((res, i)=>{
                        return (
                              <button type="button" name={props.numAsk} key={i}>{res}</button>
                        )
                  })}
            </div>
            <button className='send'>Enviar</button>
          </div>
        </div>
        <figure>
          <img src={imgPhone} alt="phone" />
        </figure>
      </article>
    </>
  );
}
