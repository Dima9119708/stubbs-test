import React, {
    useEffect,
    useRef
} from 'react';
import './index.scss'
import {
    useDispatch,
    useSelector
} from "react-redux";
import { setIDMessageAction } from "../../redux/reducer";

const Chat = () => {
    const dispatch = useDispatch()
    const messages = useSelector(({ messages }) => messages)
    const $chat = useRef(null)

    useEffect(() => {
        $chat.current.scrollTo({
            top: $chat.current.scrollHeight,
            behavior: "smooth"
        })
    }, [messages])

    const onClick = (id) => {
        dispatch(setIDMessageAction(id))
    }

    return (
        <div className="chat" ref={$chat}>
            {
                messages.map( ({ message, date, id }, idx) =>
                    <div className="chat__item" onClick={() => onClick(idx)} key={id} >
                        <div className="chat__message">{ message }</div>
                        <div className="chat__date">{ date }</div>
                    </div>
                )
            }
        </div>
    );
};

export default Chat;