import React, { Component } from 'react'
import getData from '../api/index'
import style from './LetterSpaceStyle.module.scss'
import Message from './Message/Message'
import InputForm from './InputForm/InputForm'

export default class LetterSpace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            isLoading: false
        }
    }

    fetchData = async () => {
        this.setState({
            isLoading: true
        })
        const newData = await getData()
        console.log(newData)
        this.setState({
            messages: [...this.state.messages, ...newData],
            isLoading: false
        })
    }

    mapMessage() {
        return this.state.messages.map((message) => {
            return <Message key={message.id} {...message} />
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        const { messages, isLoading } = this.state
        return (
            <>
                {isLoading ? <h1 className={style.loading}> Wait a minute... </h1> :
                    <>
                        <div className={style.messagesList}>
                            {messages.length >= 0 ? this.mapMessage() : <h1>You haven`t messages</h1>}
                            <InputForm />
                            <h1 className={style.loading}>Анонимный чат</h1>
                        </div>
                    </>
                }
            </>
        )
    }
}
