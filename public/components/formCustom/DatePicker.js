import React from 'react';
import ReactDOM from 'react-dom';

class DatePicker extends React.Component {

    componentDidMount = async () => {
        window.$(this.refs.datePick).datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight: true
        });
    }

    render() {
        return (
                <div className="tile">
                    <div className="tile-title-w-btn">
                        <h3 className="title">Date Picker</h3>
                        <p><a className="btn btn-primary icon-btn"
                              href="http://bootstrap-datepicker.readthedocs.org/en/stable/options.html" target="_blank"><i
                            className="fa fa-file"></i>Docs</a></p>
                    </div>
                    <div className="tile-body">
                        <p>This plugin can be used to let the user select the date in a convinient way.</p>
                        <h4>Demo</h4>
                        <input className="form-control" ref={'datePick'} id="demoDate" type="text" placeholder="Select Date"/>
                    </div>
                </div>
        );
    }
}

export default DatePicker;

if (document.getElementById('date-picker')) {
    ReactDOM.render(<DatePicker />, document.getElementById('date-picker'));
}
