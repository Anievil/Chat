import ACTION from '../actions/actionTypes'

export const postMessage = (data) => ({ type: ACTION.POST_MESSAGE, payload: data })

export const deleteMessage = (data) => ({type: ACTION.DELETE_MESSAGE, payload: data})
