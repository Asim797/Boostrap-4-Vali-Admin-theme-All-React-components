import React from 'react';
import ReactDOM from 'react-dom';

class NotFound extends React.Component {

    render() {
        return (
            <main className="app-content">
                <div className="page-error tile">
                    <h1><i className="fa fa-exclamation-circle"></i> Error 404: Page not found</h1>
                    <p>The page you have requested is not found.</p>
                    <p><a className="btn btn-primary" href="javascript:window.history.back();">Go Back</a></p>
                </div>
            </main>
        );
    }
}

export default NotFound;

if (document.getElementById('not-found')) {
    ReactDOM.render(<NotFound />, document.getElementById('not-found'));
}
