import style from './title.module.css';
import React from 'react'


export const Title = (props) => {
    return (

        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}

