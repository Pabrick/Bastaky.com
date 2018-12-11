import './../styles/Header.css';

import React, { Component } from 'react';

class Header extends Component {

    state = {
        menuOpen: false
    };

    toogleMenu = (event) => {
        event.preventDefault();
        const currentState = this.state.menuOpen;
        this.setState({ menuOpen: !currentState });
    }

    render() {
        return (
            <header className="app-header">
                <div className="wrapper header-wrapper">
                    <div className="header-pabrick"></div>
                    <h1>
                        <span className="h1-bast">BAST {this.currentState}</span>
                        <span className="h1-aky">AKY<div className="h1-rotation">.COM</div></span>
                    </h1>
                    <button className={`header-bt-menu ${this.state.menuOpen ? 'open': 'close'}`} onClick={this.toogleMenu}>
                        <span></span><span></span><span></span><span></span>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;