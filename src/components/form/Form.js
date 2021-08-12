import React, {
    useEffect,
    useRef
} from 'react';
import "./index.scss"
import send from './img/send.svg'
import { useDispatch } from "react-redux";
import {
    setMessageAction
} from "../../redux/reducer";

const Form = () => {
    const dispatch = useDispatch()
    const $input = useRef(null)

    useEffect(() => $input.current.focus(), [$input])

    const onSubmit = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const message = form.get('message')

        if (!message.trim()) return;

        const id = Date.now()

        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()

        const dateString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`

        dispatch(setMessageAction({ message, date: dateString, id }))

        e.target.reset()
        $input.current.focus()
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <input className="form__input"
                   ref={$input}
                   type="text"
                   name="message"
                   placeholder="Enter your message..."
            />

            <button className="form__submit" type="submit">
                <img src={send} alt="send" />
            </button>
        </form>
    );
};

export default Form;