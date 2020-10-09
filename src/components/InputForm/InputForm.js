import React, { useState } from 'react'
import style from './InputFormStyle.module.scss'
import postData from '../../api/post'

export default function InputForm() {
    const [message, setMessage] = useState('')
    
    const readMessage = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setMessage(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        postData(message)
    }

    return (
        <form className={style.inputForm} onSubmit={sendMessage}>
            <textarea placeholder="Enter your message" className={style.messageInput} type="text" maxLength="255" required value={message} onChange={readMessage} ></textarea>
            <input type="submit" className={style.submitBtn} />
        </form>
    )
}
