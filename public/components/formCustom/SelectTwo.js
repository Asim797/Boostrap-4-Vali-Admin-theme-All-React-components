import React from 'react';
import ReactDOM from 'react-dom';

class SelectTwo extends React.Component {

    componentDidMount = async () => {
        window.$(this.refs.selectTwo).select2();
    }

    render() {
        return (
                <div className="tile">
                    <div className="tile-title-w-btn">
                        <h3 className="title">Select2</h3>
                        <p><a className="btn btn-primary icon-btn" href="https://select2.github.io/examples.html"
                              target="_blank"><i className="fa fa-file"></i>Docs</a></p>
                    </div>
                    <div className="tile-body">
                        <p>This plugin can be used to convert select element into advanced componant.</p>
                        <h4>Demo</h4>
                        <select className="form-control selectTwo" ref={'selectTwo'}  id="demoSelect" multiple>
                            <optgroup label="Select Cities">
                                <option>Ahmedabad</option>
                                <option>Surat</option>
                                <option>Vadodara</option>
                                <option>Rajkot</option>
                                <option>Bhavnagar</option>
                                <option>Jamnagar</option>
                                <option>Gandhinagar</option>
                                <option>Nadiad</option>
                                <option>Morvi</option>
                                <option>Surendranagar</option>
                                <option>Junagadh</option>
                                <option>Gandhidham</option>
                                <option>Veraval</option>
                                <option>Ghatlodiya</option>
                                <option>Bharuch</option>
                                <option>Anand</option>
                                <option>Porbandar</option>
                                <option>Godhra</option>
                                <option>Navsari</option>
                                <option>Dahod</option>
                                <option>Botad</option>
                                <option>Kapadwanj</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
        );
    }
}

export default SelectTwo;

if (document.getElementById('select-two')) {
    ReactDOM.render(<SelectTwo />, document.getElementById('select-two'));
}
