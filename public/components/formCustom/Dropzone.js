import React from 'react';
import ReactDOM from 'react-dom';

class Dropzone extends React.Component {

    render() {
        return (
                <div className="tile">
                    <div className="tile-title-w-btn">
                        <h3 className="title">Dropzone</h3>
                        <p><a className="btn btn-primary icon-btn" href="https://gitlab.com/meno/dropzone"
                              target="_blank"><i className="fa fa-file"></i>Docs</a></p>
                    </div>
                    <div className="tile-body">
                        <p>This plugin can be used to let the user Drag and Drop files for upload in a easy way.</p>
                        <h4>Demo</h4>
                        <form className="text-center dropzone" encType="multipart/form-data">
                            <div className="dz-message">Drop files here or click to upload <br/>
                                <small className="text-info">(This is just a dropzone demo. Selected files are not actually
                                    uploaded.)
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Dropzone;

if (document.getElementById('dropzone-component')) {
    ReactDOM.render(<Dropzone />, document.getElementById('dropzone-component'));
}
