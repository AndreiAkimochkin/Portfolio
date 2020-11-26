import style from './works.module.css';
import React from 'react'
import styleContainer from "../common/styles/container.module.css";
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.works}>
                    <Work
                        title={'Projects name 1'}
                        description={' Short description 1'}/>
                    <Work
                        title={'Projects name 2'}
                        description={' Short description 2'}/>

                </div>
            </div>


        </div>
    );
}

