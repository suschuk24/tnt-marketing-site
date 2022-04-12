import React from "react";
import logo from '../../logo.svg'
import "./Header.css"

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This is the header, the TNT logo will appear here.
            </p>
        </header>
    )
}

export default Header
