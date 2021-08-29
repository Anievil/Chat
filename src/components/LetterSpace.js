import React from 'react'
import { useSelector } from 'react-redux'

import style from './LetterSpaceStyle.module.scss'
import Message from './Message/Message'
import InputForm from './InputForm/InputForm'

const LetterSpace = () => {
    const messageData = useSelector(({ messageStore }) => messageStore.data)

    return (
        <div className={style.messagesList}>
            {messageData.length >= 0
                ? messageData.map(message => <Message key={message.id} {...message} />)
                : <h1>You haven`t messages</h1>
            }
            <InputForm countOfMessages={messageData.length} />
            <h1 className={style.loading}>Чат</h1>
        </div>
    )
}


export default LetterSpace