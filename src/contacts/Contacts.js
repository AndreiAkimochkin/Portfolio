import style from './contacts.module.scss';
import React from 'react'
import styleContainer from '../common/styles/container.module.scss'
import {Form} from "./Form/Form";
import {SubmitButton} from "../common/Buttons/SubmitButton";
import Fade from 'react-reveal/Fade';

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <h2 className={style.title}>Contacts</h2>
                    <div className={style.contacts}>
                        <Form/>
                    </div>
                    <div className={style.description}>
                        <h2><SubmitButton text={'send message'}/></h2>
                    </div>
                </div>

            </Fade>
        </div>
    );
}

