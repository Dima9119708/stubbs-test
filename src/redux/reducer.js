const MESSAGE = 'MESSAGE'
const MESSAGE_ID = 'MESSAGE_ID'

export const setMessageAction = (payload) => ({ type: MESSAGE, payload })
export const setIDMessageAction = (payload) => ({ type: MESSAGE_ID, payload })

const defaultState = {
    messages: [],
}

export default function reducer(state = defaultState, action) {

    switch (action.type) {

        case MESSAGE : {

            const { messages } = state

            messages.push(action.payload)

            return {
                ...state,
                messages: [...messages]
            }
        }

        case MESSAGE_ID : {

            const { messages } = state

            messages.splice(action.payload, 1)

            return {
                ...state,
                messages: [...messages]
            }
        }

        default : {
            return state;
        }
    }
}