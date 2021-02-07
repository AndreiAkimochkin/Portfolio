import style from './remote.module.scss';
import React from 'react'
import styleContainer from '../common/styles/container.module.scss'
import {SubmitButton} from "../common/Buttons/SubmitButton";
import Fade from 'react-reveal/Fade';


export const Remote = () => {
    return (
        <div id='remote' className={style.remoteBlock}>
            <Fade left>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>
                    Considering options for remote work </h2>
                <div className={style.description}>
                    <div>
                        <h3> <SubmitButton text={'hire me'}/></h3>
                    </div>

                </div>
            </div>

            </Fade>
        </div>
    );
}

