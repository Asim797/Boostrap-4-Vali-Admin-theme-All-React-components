import React from 'react';
import ReactDOM from 'react-dom';

class AddRemoveItemCard extends React.Component {

    render() {
        return (
            <div className="tile">
                <div className="tile-title-w-btn">
                    <h3 className="title">All Items</h3>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#">
                            <i className="fa fa-lg fa-plus"></i>
                        </a>
                        <a className="btn btn-primary" href="#">
                            <i className="fa fa-lg fa-edit"></i>
                        </a>
                        <a className="btn btn-primary" href="#">
                            <i className="fa fa-lg fa-trash"></i>
                        </a>
                    </div>
                </div>
                <div className="tile-body">
                    <b>Card with button group </b><br/>
                    Hey there, I am a very simple card. I am good at containing small bits of information. I am quite
                    convenient because I require little markup to use effectively.

                </div>
            </div>
        );
    }
}

export default AddRemoveItemCard;

if (document.getElementById('add-remove-item-card')) {
    ReactDOM.render(<AddRemoveItemCard />, document.getElementById('add-remove-item-card'));
}
