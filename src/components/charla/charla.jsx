import "./styles.scss";
import 'animate.css';

import npcStandar from "../../assets/img/npcStandar.png";
import npcMad from "../../assets/img/npcMad.png";
import npcSurprised from "../../assets/img/npcSurprised.png";
import npcSurprisedB from "../../assets/img/npcStandar_2.png";
import letrero from "../../assets/img/letrero.png";
import logo360 from '../../assets/img/360g.png'

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import conversation from '../../conversation/tendero.jsx'
import TenderoImg from '../tendero/TenderoImg'

import Preload from "../preload/preload";

export default function Charla() {
      const navigate = useNavigate()

      const [activeChat, setActiveChat] = useState('first')
      const [ownerChat, setOwnerChat] = useState([])
      const [imageNpc, setImageNpc] = useState(npcStandar)



      const chatSelected = ({dataConver}) => {
        const { textOption, pointer, event, emote } = dataConver;
            // show the chat conversation selected
            setOwnerChat([...ownerChat,<div className="myglobo animate__animated animate__fadeInUp" key={Math.random()}><p>{textOption}</p></div>]);

            // cambia emocion del tendero "imagen"
            if (emote) {
              switch (emote) {
                case 'mad':
                  setImageNpc(npcMad)
                  break;
                case 'surprised':
                  setImageNpc(npcSurprised)
                  break;              
                case 'standar':
                  setImageNpc(npcStandar)
                  break;              
                case 'standarB':
                  setImageNpc(npcSurprisedB)
                  break;              
                default:
                  setImageNpc(npcStandar)
                  break;
              }
            }
            // crea chat en pantalla, solo si hay puntero
            if (pointer) {
                  setTimeout(()=>{
                        setOwnerChat(prevOwnerChat => [
                              ...prevOwnerChat,
                              <div className="globo animate__animated animate__backInRight" key={prevOwnerChat.length}>
                                <p>{conversation.NPC_options[pointer].text}</p>
                              </div>
                        ]);
                        setActiveChat(pointer)
                  },1000)
            }
            // ejecuta un funcion si existe evento
            if (event) {
              switch (event) {
                case 'reset':
                      setTimeout(()=>{
                            window.location.reload();
                      }, 1000)
                      break;
                case 'nextScene':
                      console.log('corro')
                      navigate('/store');
                      break;
          }
            }

      }


useEffect(()=>{
      setTimeout(()=>{
            setOwnerChat(prevOwnerChat => [
                  ...prevOwnerChat,
                  <div className="globo animate__animated animate__backInRight" key={prevOwnerChat.length}>
                    <p>{conversation.NPC_options[activeChat].text}</p>
                  </div>
                ]);
      },3000)
  },[])

  return (
    <section className="charla">
      <svg
        className="clip"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1367 189"
      >
        <path
          className="clip-cls"
          d="m1367,122s-369,78-702-14S251,1,0,0v189h1367v-67Z"
        />
      </svg>
      <article className="charla__chat">
        <div className="letrero">
          <figure>
            <img src={letrero} alt="letrero" />
          </figure>
        </div>
        <div className="wall">
            {ownerChat}
        </div>
        
        <div className="box-buttons">


          <div className="card">
            <div className="top-section">
              <div className="border"></div>
              <div className="icons">
                <div className="logo">
                  <figure>
                        <img src={logo360} alt="360" />
                  </figure>
                </div>
                <div className="social-media">
                  <h3>CHAT</h3>
                </div>
              </div>
                  <div className="options">
                        {conversation.NPC_options[activeChat].pointers.map((puntero, i)=>{
                              return  (
                                    <div className='option' key={i} onClick={()=>{
                                          chatSelected({dataConver:{
                                            textOption:conversation.user_options[puntero].text,
                                            pointer: conversation.user_options[puntero].pointer,
                                            event: conversation.user_options[puntero].event,
                                            emote: conversation.user_options[puntero].emote
                                          }})
                                    }}>
                                          <span>{i+1}</span>
                                          <p>{conversation.user_options[puntero].text}</p>
                                    </div>
                              )
                        })}
                  </div>
            </div>
          </div>
        </div>
      </article>
      <TenderoImg npcImage={imageNpc}/>
      <Preload />
    </section>
  );
}
