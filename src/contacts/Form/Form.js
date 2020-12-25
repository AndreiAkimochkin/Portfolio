import style from './form.module.scss';
import React from 'react'

export const Form = (props) => {
    return (
        <div className={style.form}>
                      <span className={style.description}>
                    <div> <form action="text">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text" id="" cols="21" rows="15"></textarea>
                </form></div>
                </span>

        </div>


    );
}

