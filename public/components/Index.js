import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Sidebar from './Sidebar';

class Index extends React.Component {

    render() {
        return (
                <div>
                    <Header/>
                    <Sidebar/>
                </div>
        );
    }
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
