import style from './remote.module.scss';
import React from 'react'
import styleContainer from '../common/styles/container.module.css'

export const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>
                    Considering options for remote work </h2>
                <div className={style.description}>
                    <h3>
                        <button className={style.btn}>Hire me</button>
                    </h3>

                </div>
            </div>


        </div>
    );
}

