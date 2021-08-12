import React from 'react';
import "./index.scss"
import send from './img/send.svg'
import { useDispatch } from "react-redux";
import {
    setMessageAction
} from "../../redux/reducer";

const Form = () => {
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const message = form.get('message')

        if (!message.trim()) return;

        const date = new Date()
        const dateString = `${date.getHours()}:${date.getMinutes()}`

        dispatch(setMessageAction({ message, date: dateString }))

        e.target.reset()
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <input className="form__input" type="text" name="message" placeholder="Enter your message..."/>

            <button className="form__submit" type="submit">
                <img src={send} alt="send" />
            </button>
        </form>
    );
};

export default Form;