import React from 'react';
import ReactDOM from 'react-dom';

class AddItemCard extends React.Component {

    render() {
        return (
            <div className="tile">
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

export default AddItemCard;

if (document.getElementById('add-item-card')) {
    ReactDOM.render(<AddItemCard />, document.getElementById('add-item-card'));
}
