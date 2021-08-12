import React from 'react';
import './index.scss'

const Chat = () => {
    return (
        <div className="chat">
            { 
                [
                  'Just to order', 
                  'Okay, for what level of spiciness?',
                ].map(message =>
                    <div className="chat__item">
                        <div className="chat__message">{ message }</div>
                        <div className="chat__date">12:45</div>
                    </div>
                )
            }
        </div>
    );
};

export default Chat;