import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postMessage } from '../../actions/actionCreator'
import style from './InputFormStyle.module.scss'

const InputForm = ({ countOfMessages }) => {
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const readMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault() 
        dispatch(postMessage({ id: countOfMessages + 1, message }))
        setMessage('')
    }

    return (
        <form className={style.inputForm} onSubmit={sendMessage}>
            <textarea
                placeholder="Enter your message"
                className={style.messageInput}
                type="text"
                maxLength="255"
                required
                value={message}
                onChange={readMessage} />
            <input type="submit" className={style.submitBtn} />
        </form>
    )
}

export default InputForm