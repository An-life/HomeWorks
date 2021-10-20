import React from 'react'
import {AffairType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from '../h2/Affairs.module.css'


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div>
            <span  className={s.spanStyle}>show some text</span>

            <SuperButton red onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
