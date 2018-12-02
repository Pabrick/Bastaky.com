import './../styles/Header.css';

import React, { Component } from 'react';

class Header extends Component {
    render() {
        const value = '10px';
        console.log(value);
        return (
            <header className="app-header">
                El componente Header
            </header>
        );
    }
}

export default Header;