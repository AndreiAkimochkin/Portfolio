import style from './header.module.css';
import React from 'react'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
}

