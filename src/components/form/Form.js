import React from 'react';
import "./index.scss"
import send from './img/send.svg'

const Form = () => {
    return (
        <form className="form">
            <input className="form__input" type="text"/>

            <button className="form__submit" type="submit">
                <img src={send} alt="send" />
            </button>

        </form>
    );
};

export default Form;