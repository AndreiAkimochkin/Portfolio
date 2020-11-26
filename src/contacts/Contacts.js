import style from './contacts.module.css';
import React from 'react'
import styleContainer from './../common/styles/container.module.css'
import {Form} from "./Form/Form";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <Form/>
                </div>
                <div>
                    <h2 className={style.submit}>Submit</h2>
                </div>
            </div>


        </div>
    );
}

