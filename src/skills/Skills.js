import style from './skills.module.scss';
import React from 'react'
import styleContainer from './../common/styles/container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill
                        title={'HTML'}
                        description={' Something about each my skills 1'}/>
                    <Skill
                        title={'JAVASCRIPT'}
                        description={' Something about each my skills 2'}/>
                    <Skill
                        title={'CSS'}
                        description={' Something about each my skills 3'}/>
                    <Skill
                        title={'REACT'}
                        description={' Something about each my skills 4'}/>
                    <Skill
                        title={'REDUX'}
                        description={' Something about each my skills 5'}/>
                    <Skill
                        title={'THUNK'}
                        description={' Something about each my skills 6'}/>
                    <Skill
                        title={'GIT'}
                        description={' Something about each my skills 7'}/>
                    <Skill
                        title={'REST API'}
                        description={' Something about each my skills 8'}/>
                    <Skill
                        title={'STORYBOOK/JEST'}
                        description={' Something about each my skills 9'}/>
                </div>
            </div>


        </div>
    );
}

