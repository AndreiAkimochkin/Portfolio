import style from './works.module.scss';
import React from 'react'
import styleContainer from "../common/styles/container.module.scss";
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import  socialNetImage from "./../assets/image/SocialNet.jpg"
import  todoListImage from "./../assets/image/TodoList.jpg"


export const Works = () => {
    const socialNet = {
       backgroundImage: `url(${socialNetImage})`,
    };

    const todoList = {
        backgroundImage: `url(${todoListImage})`,
    };
       return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
              <Title text={'Works'}/>
                <div className={style.works}>
                    <Work
                        style={socialNet}
                        title={'Social Network'}
                        description={' Short description 1'}/>
                    <Work
                        style={todoList}
                        title={'To Do List'}
                        description={' Short description 2'}/>

                </div>
            </div>


        </div>
    );
}

