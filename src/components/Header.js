import './../styles/Header.css';

import React, { Component } from 'react';

class Header extends Component {
    render() {
        const value = '10px';
        console.log(value);
        return (
            <header className="app-header">
                <div className="wrapper header-wrapper">
                    <div className="header-pabrick"></div>
                    <h1>
                        <span className="h1-bast">BAST</span>
                        <span className="h1-aky">AKY<div className="h1-rotation">.COM</div></span>
                    </h1>
                    <button classMenu="header-bt-menu"></button>
                </div>
            </header>
        );
    }
}

export default Header;