import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import './index.scss'
import {
    useDispatch,
    useSelector
} from "react-redux";
import { setIDMessageAction } from "../../redux/reducer";

const Chat = () => {
    const [scroll, setScroll] = useState(true)
    const dispatch = useDispatch()
    const messages = useSelector(({ messages }) => messages)
    const $chat = useRef(null)

    useEffect(() => {
        if (scroll) {
            $chat.current.scrollTo({
                top: $chat.current.scrollHeight,
                behavior: "smooth"
            })
        } else {
            setScroll(true)
        }
    }, [messages])

    const onClick = (id) => {
        setScroll(false)
        dispatch(setIDMessageAction(id))
    }

    return (
        <div className="chat" ref={$chat}>
            {
                messages.map( ({ message, date, id }, idx) =>
                    <div className="chat__item" onClick={() => onClick(idx)} key={id} >
                        <span className="chat__message">{ message }</span>
                        <time className="chat__date">{ date }</time>
                    </div>
                )
            }
        </div>
    );
};

export default Chat;