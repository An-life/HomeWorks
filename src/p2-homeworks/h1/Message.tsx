import React from 'react'
import s from './Message.module.css'
type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props:MessageDataType) {
    return (
        <div className={s.messageContainer}>
            <div><img src={props.avatar}/></div>
         <div className={s.textContainer}>
            <h2>{props.name}</h2>
             <p>{props.message}</p>
            <p className={s.time}>{props.time}</p>
         </div>
        </div>
    )
}

export default Message
