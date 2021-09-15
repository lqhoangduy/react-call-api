import React, { Component } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const menu = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/products',
        exact: false
    },
]

function MenuLink({label, to, activeOnlyWhenExact}) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    var active = match ? 'active' : '';

    return (
        <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>{label}</Link>
        </li>
    );
};

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">CALL API</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            { this.showMenu(menu) } 
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    showMenu = (menu) => {
        var result = null;

        if(menu.length > 0) {
            result = menu.map((item, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        label={item.name} 
                        to={item.to} 
                        activeOnlyWhenExact={item.exact} 
                    />
                );
            })
        }

        return result;
    }
}

export default Menu;