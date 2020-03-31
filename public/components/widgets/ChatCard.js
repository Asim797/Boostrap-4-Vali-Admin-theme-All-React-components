import React from 'react';
import ReactDOM from 'react-dom';

class ChatCard extends React.Component {

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Chat</h3>
                <div className="messanger">
                    <div className="messages">
                        <div className="message"><img
                            src="https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/48.jpg"/>
                            <p className="info">Hello there!<br/>Good Morning</p>
                        </div>
                        <div className="message me"><img
                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"/>
                            <p className="info">Hi<br/>Good Morning</p>
                        </div>
                        <div className="message"><img
                            src="https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/48.jpg"/>
                            <p className="info">How are you?</p>
                        </div>
                        <div className="message me"><img
                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"/>
                            <p className="info">I'm Fine.</p>
                        </div>
                    </div>
                    <div className="sender">
                        <input type="text" placeholder="Send Message"/>
                            <button className="btn btn-primary" type="button"><i className="fa fa-lg fa-fw fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatCard;

if (document.getElementById('chart-card')) {
    ReactDOM.render(<ChatCard />, document.getElementById('chart-card'));
}
