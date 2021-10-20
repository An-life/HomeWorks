import React, {ChangeEvent, useRef, useState} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string// need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,} // деструктуризация пропсов
) => {

    return (
        <div>
            <SuperInputText value={name} setError={()=>{}} spanClassName={s.testSpanError} error={error} onChange={setNameCallback}/>
            <SuperButton  onClick={addUser}>add</SuperButton>
            <span>{totalUsers}</span>

        </div>
    )
}

export default Greeting
