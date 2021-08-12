const MESSAGE = 'MESSAGE'

export const setMessageAction = (payload) => ({ type: MESSAGE, payload })

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

        default : {
            return state;
        }
    }
}