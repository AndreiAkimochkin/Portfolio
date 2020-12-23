import style from './work.module.scss';
import React from 'react'

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <div className={style.icon}>
                    <a href="link">Show me</a>
                </div>
            </div>
            <div className={style.workInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}> {props.description}</span>
            </div>

        </div>


    );
}

