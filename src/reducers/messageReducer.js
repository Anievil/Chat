import ACTION from '../actions/actionTypes';

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.POST_MESSAGE: return { data: [...state.data, action.payload ] };
        case ACTION.DELETE_MESSAGE: return { data: state.data.filter(el => el.id !== action.payload.id)}

        default: return state;
    }
}
