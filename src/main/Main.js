import style from './main.module.scss';
import React from 'react'
import styleContainer from '../common/styles/container.module.scss'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';
import Particles from "react-particles-js";


export const Main = () => {

    return (
        <div id='main' className={style.mainBlock}>

            {/*<Particles clasName={style.particles}*/}
            {/*           params={{*/}
            {/*               "particles": {*/}
            {/*                   "number": {*/}
            {/*                       "value": 200*/}
            {/*                   },*/}
            {/*                   "size": {*/}
            {/*                       "value": 3*/}
            {/*                   }*/}
            {/*               },*/}
            {/*               "interactivity": {*/}
            {/*                   "events": {*/}
            {/*                       "onhover": {*/}
            {/*                           "enable": true,*/}
            {/*                           "mode": "repulse"*/}
            {/*                       }*/}
            {/*                   }*/}
            {/*               }*/}
            {/*           }} />*/}

            <Fade top>


            <div className={styleContainer.container}>

                <div className={style.text}>

                    <h2 className={style.h2}>    <ReactTypingEffect
                        text=" HI THERE!"
                    /></h2>
                    <h1 className={style.h1}> <span className={style.span}>I'M  </span>
                        ANDREI AKIMOCHKIN</h1>
                    <p className={style.p}>I'm a front‑end developer focused on crafting clean & user‑friendly experiences,
                        I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
                <Tilt className="Tilt" options={{ max : 30 }}  >
                    <div className={style.photo}></div>
                </Tilt>

            </div>
            </Fade>
        </div>
    );
}

