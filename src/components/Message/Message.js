import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteMessage } from '../../actions/actionCreator'
import style from './MessageStyle.module.scss'

const Message = ({ id, date, message }) => {
    const dispatch = useDispatch()

    const deleteMess = () => {
        dispatch(deleteMessage({id}))
    }

    return (
        <div className={style.messageCont}>
            <img 
                className={style.close} 
                src="https://img.icons8.com/ios-glyphs/30/000000/close-window.png" 
                alt='close' 
                onClick={deleteMess}    
            />
            <p className={style.author}>{'>> ' + id}</p>
            <p className={style.message}>{message}</p>
        </div>
    )
}

export default Message