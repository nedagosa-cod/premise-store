import 'animate.css';
import './styles.scss'
import { useEffect, useRef } from 'react';

export default function Preload() {
      const refExit = useRef()
      useEffect(()=>{
            setTimeout(()=>{
                  refExit.current.classList.add('animate__slideOutUp')
            },2500)
      },[])
      return (
            <>
                  <section className="preload animate__animated" ref={refExit}>
                        <div className="loader">
                              <div className="eye"></div>
                        </div>
                        <h1>Store Viwer</h1>
                  </section>
            </>
      )
}