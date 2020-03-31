import React from 'react';
import ReactDOM from 'react-dom';

class BorderedTable extends React.Component {

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Bordered Table</h3>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BorderedTable;

if (document.getElementById('borderedTable')) {
    ReactDOM.render(<BorderedTable />, document.getElementById('borderedTable'));
}
