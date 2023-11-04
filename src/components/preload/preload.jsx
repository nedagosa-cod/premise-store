import 'animate.css';
import './styles.scss'
import iconPointer from '../../assets/iconScenes/produClick.png'
import iconNext from '../../assets/iconScenes/nextScene.png'
import iconCapture from '../../assets/iconScenes/captureScreen.png'
import { useEffect, useRef } from 'react';

import Swal from 'sweetalert2';

export default function Preload(props) {
      const refExit = useRef()

      useEffect(()=>{
            setTimeout(()=>{
                  refExit.current.classList.add('animate__slideOutUp')
            },2500)
            setTimeout(()=>{
                  if (props.funct) {
                        Swal.fire({
                              icon: 'question',
                              title: 'Información de uso',
                              width: 600,
                              html: `<div><figure><img src=${iconPointer} alt="Mostrar Preguntas"></figure><span>Mostrar Preguntas</span></div><div><figure><img src=${iconNext} alt="Puntero Para ir a Siguiente Escena"></figure><span>Avanzar Posición</span></div><div><figure><img src=${iconCapture} alt="Puntero Para Tomar Foto"></figure><span>Realizar Foto Evidencia</span></div>`,
                              confirmButtonColor: '#ff5b4a',
                              confirmButtonText: 'Entendido',
                              customClass: {
                                    htmlContainer: 'informacion',
                                    title: 'myswal-title',
                                    confirmButton: 'myswal-button-confirm',
                                    icon: 'myswal-icon'
                              }
                        })
                  }
            },3500)
      },[])
      return (
            <>
                  <section className="preload animate__animated" ref={refExit}>
                        
                  </section>
            </>
      )
}