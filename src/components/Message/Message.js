import React from 'react'
import style from './MessageStyle.module.scss'

export default function Message(props) {
    const { id, message  } = props
    return (
        <div className={style.messageCont}>
            <p className={style.author}>>>{id}</p>
            <p className={style.message}>{message}</p>
        </div>
    )
}
