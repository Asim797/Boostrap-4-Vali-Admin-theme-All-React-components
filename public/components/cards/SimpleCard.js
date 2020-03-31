import React from 'react';
import ReactDOM from 'react-dom';

class SimpleCard extends React.Component {

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Card Title</h3>
                <div className="tile-body">Hey there, I am a very simple card. I am good at containing small bits of
                    information. I am quite convenient because I require little markup to use effectively.
                </div>
                <div className="tile-footer"><a className="btn btn-primary" href="#">Link</a></div>
            </div>
        );
    }
}

export default SimpleCard;

if (document.getElementById('simple-card')) {
    ReactDOM.render(<SimpleCard />, document.getElementById('simple-card'));
}
