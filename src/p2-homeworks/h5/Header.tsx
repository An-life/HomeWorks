import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {


    return (<>
        <nav className={s.Nav}>
            <NavLink to={'/pre-junior'} activeClassName={s.activeLink}>PreJunior</NavLink>
            <NavLink to={'/junior'} activeClassName={s.activeLink}>Junior</NavLink>
            <NavLink to={'/junior-plus'} activeClassName={s.activeLink}>JuniorPlus</NavLink>
            <span className={s.toggle}> </span>

        </nav>


        {/*<NavLink to={'/Error404'}>Error404</NavLink>*/}
    </>)
}

export default Header;
