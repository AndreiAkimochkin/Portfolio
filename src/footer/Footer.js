import style from './footer.module.scss';
import React from 'react'
import styleContainer from '../common/styles/container.module.scss'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>don't be shy!</h3>
                <p className={style.text}>Feel free to get in touch with me.
                    I am always open to discussing new projects,
                    creative ideas or opportunities to be part of your visions.</p>
                <div className={style.social}>
                    <div className={style.github}>
                        <a href="#" target="_blank"><i className="fa fa-github fa-2x"></i></a>
                    </div>
                    <div className={style.linkedin}>
                        <a href="#" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                    </div>
                    <div className={style.google}>
                        <a href="#" target="_blank"><i className="fa fa-google-plus fa-2x"></i></a>
                    </div>
                    <div className={style.instagram}>
                        <a href="#" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
                    </div>
                    <div className={style.whatsupp}>
                        <a href="#" target="_blank"><i className="fa fa-whatsapp fa-2x"></i></a>
                    </div>
                </div>
                {/*<div className={style.notation}>*/}
                {/*    <h3>*/}
                {/*        {'2020, All rights reserved'}*/}
                {/*    </h3>*/}

                {/*</div>*/}
            </div>

        </div>
    );
}

