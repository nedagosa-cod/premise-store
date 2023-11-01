import imgPhone from '../../assets/img/phone.png'
import './styles.scss'

export default function Phone(props) {
  return (
    <>
      <article className="phone">
        <div className="questions">
          <div className="questions__inner">
            <div className='header'>
              <h1>NUEVO - Premise</h1>
            </div>
            <p id='elPregunta' className='pregunta'>{props.ask}</p>
            <div id='formRespuestas' className='respuestas'>
                  {props.answers.map((res, i)=>{
                        return (
                              // <button type="button" name={props.numAsk} key={i}>{res}</button>
                              <label htmlFor="" key={i} className='multisel'>
                                <input type="checkbox" name={res}/>
                                {res}
                              </label>
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
