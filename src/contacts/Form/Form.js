import style from './form.module.scss';
import React from 'react'

export const Form = (props) => {
    return (
        <div>
            <form className={style.form}>
                      <span className={style.description}>
                          <div className={style.col}>
                              <input className={style.input} type="text" placeholder='YOUR NAME'/>
                          </div>
                            <div className={style.col}>
                              <input  className={style.input} type="text" placeholder='YOUR EMAIL'/>
                          </div>
                            <div className={style.col}>
                              <input  className={style.input} type="text" placeholder='YOUR SUBJECT'/>
                          </div>
                        <div className={style.message}>
                    <textarea className={style.text} name="message"
                              placeholder='YOUR MESSAGE'></textarea>
                        </div>
                </span>

            </form>
        </div>


    );
}

