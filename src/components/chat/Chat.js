import React, {
    useEffect,
    useRef
} from 'react';
import './index.scss'
import { useSelector } from "react-redux";

const Chat = () => {
    const messages = useSelector(({ messages }) => messages)
    const $chat = useRef(null)

    useEffect(() => {
        $chat.current.scrollTo({
            top: $chat.current.scrollHeight,
            behavior: "smooth"
        })
    }, [messages])

    return (
        <div className="chat" ref={$chat}>
            {
                messages.map( (obj, idx) =>
                    <div key={idx} className="chat__item">
                        <div className="chat__message">{ obj.message }</div>
                        <div className="chat__date">{ obj.date }</div>
                    </div>
                )
            }
        </div>
    );
};

export default Chat;