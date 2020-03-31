import React from 'react';
import ReactDOM from 'react-dom';

class ResponsiveTable extends React.Component {

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Responsive Table</h3>
                <div className="table-responsive">
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
                        <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ResponsiveTable;

if (document.getElementById('responsiveTable')) {
    ReactDOM.render(<ResponsiveTable />, document.getElementById('responsiveTable'));
}
