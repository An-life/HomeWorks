import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div>
            <h2 className={s.ErrorTitle}>404</h2>
            <h3 className={s.ErrorText}>Page not found!</h3>
            <div className={s.container}> <img src={'https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className={s.ErrorImg} alt={'Error'}/></div>


        </div>
    )
}

export default Error404
