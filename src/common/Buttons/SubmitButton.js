import style from './submitButton.module.scss';
import React from 'react'


export const SubmitButton = (props) => {
    return (

        <button type='submit' className={style.btn}>
            <span className={style.span}>{props.text}</span>
        </button>
    )
};

