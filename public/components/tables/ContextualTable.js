import React from 'react';
import ReactDOM from 'react-dom';

class ContextualTable extends React.Component {

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Contextual Classes</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table-info">
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr className="table-success">
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr className="table-danger">
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr className="table-warning">
                        <td>4</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContextualTable;

if (document.getElementById('contextualTable')) {
    ReactDOM.render(<ContextualTable />, document.getElementById('contextualTable'));
}
