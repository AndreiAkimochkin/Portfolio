import style from './nav.module.scss';
import React from 'react'
import Flip from 'react-reveal/Flip';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Flip right>
            <a href="">Main</a>
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={-80}
                      duration={1000}
                      delay={250}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                > <a href="">Skills</a></Link>
                <Link activeClass={style.active}
                      to="works"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={-80}
                      duration={1000}
                      delay={250}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                > <a href="">Works</a></Link>
                <Link activeClass={style.active}
                      to="remote"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={-80}
                      duration={1000}
                      delay={250}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                > <a href="">Remote</a></Link>
             <Link activeClass={style.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={-80}
                      duration={1000}
                      delay={250}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                > <a href="">Contacts</a></Link>
            </Flip>
        </div>
    );
}

