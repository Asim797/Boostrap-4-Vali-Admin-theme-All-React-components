import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="app-sidebar">
                <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image"/>
                    <div>
                        <p className="app-sidebar__user-name">John Doe</p>
                        <p className="app-sidebar__user-designation">Frontend Developer</p>
                    </div>
                </div>
                <ul className="app-menu">
                    <li><a className="app-menu__item active" href="/chart"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Charts</span></a></li>
                    <li><a className="app-menu__item" href="/form-custom"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Custom Forms</span></a></li>
                    <li><a className="app-menu__item" href="/tables"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Tables</span></a></li>
                    <li><a className="app-menu__item" href="/data-table"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Data table</span></a></li>
                    <li><a className="app-menu__item" href="/cards"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Cards</span></a></li>
                    <li><a className="app-menu__item" href="/widgets"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Widgets</span></a></li>
                </ul>
            </aside>
        );
    }
}

export default Sidebar;

