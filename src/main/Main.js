import style from './main.module.scss';
import React from 'react'
import styleContainer from '../common/styles/container.module.scss'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h2 className={style.h2}>Hi THERE!</h2>
                    <h1 className={style.h1}> <span className={style.span}>I'M </span>
                        ANDREI AKIMOCHKIN</h1>
                    <p className={style.p}>I'm a front‑end developer focused on crafting clean & user‑friendly experiences,
                        I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

