import style from './footer.module.scss';
import React from 'react'
import styleContainer from '../common/styles/container.module.scss'
import {Net} from "./socialNets/Net";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Akimochkin Andrei</h2>
                <div className={style.footer}>
                    <Net title={'Facebook'}/>
                    <Net title={'Twitter'}/>
                    <Net title={'LinkedIn'}/>
                    <Net title={'GitHub'}/>
                </div>
                <div className={style.notation}>
                    <h3>
                        {'2020, All rights reserved'}
                    </h3>

                </div>
            </div>

        </div>
    );
}

