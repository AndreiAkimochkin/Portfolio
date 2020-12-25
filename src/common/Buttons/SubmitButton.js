import style from './submitButton.module.scss';
import React from 'react'


export const SubmitButton = (props) => {
    return (

        <button className={style.btn}>
            <span>{props.text}</span>
        </button>
    )
};

