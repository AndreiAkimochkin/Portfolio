import style from './skills.module.css';
import React from 'react'
import styleContainer from './../common/styles/container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill
                        title={'Form 1'}
                        description={' Something about each my skills 1'}/>
                    <Skill
                        title={'Form 2'}
                        description={' Something about each my skills 2'}/>
                    <Skill
                        title={'Form 3'}
                        description={' Something about each my skills 3'}/>
                </div>
            </div>


        </div>
    );
}

