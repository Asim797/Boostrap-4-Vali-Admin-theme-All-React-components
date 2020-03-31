import React from 'react';
import ReactDOM from 'react-dom';

class LoadingCard extends React.Component {

    render() {
        return (
            <div className="tile">
                <div className="overlay">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
                        </svg>
                    </div>
                    <h3 className="l-text">Loading</h3>
                </div>
                <div className="tile-title-w-btn">
                    <h3 className="title">All Items</h3>
                    <p><a className="btn btn-primary icon-btn" href=""><i className="fa fa-plus"></i>Add Item </a></p>
                </div>
                <div className="tile-body">
                    <b>Card with action button </b><br/>
                    Hey there, I am a very simple card. I am good at containing small bits of information. I am quite
                    convenient because I require little markup to use effectively.
                </div>
            </div>
        );
    }
}

export default LoadingCard;

if (document.getElementById('loading-card')) {
    ReactDOM.render(<LoadingCard />, document.getElementById('loading-card'));
}
