const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Kek'},
        {id: 3, message: 'Lol'},
        {id: 4, message: 'Bye'}
    ],
    dialogs: [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Glasha'}
    ],

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case  SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }

        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer
