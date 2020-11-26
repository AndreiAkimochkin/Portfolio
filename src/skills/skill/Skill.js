import style from './skill.module.css';
import React from 'react'

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}> </div>
                <h3>{props.title}</h3>
                <span className={style.description}>
                    {props.description}
                </span>

        </div>


    );
}

