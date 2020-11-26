import style from './nav.module.css';
import React from 'react'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Works</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}

