import style from './header.module.scss';
import React from 'react'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
}

