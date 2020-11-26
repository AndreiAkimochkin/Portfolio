import style from './main.module.css';
import React from 'react'
import styleContainer from './../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span> Hi There</span>
                    <h1> I am Andrei Akimochkin</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

