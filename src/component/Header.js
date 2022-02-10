import React, { Component } from "react";
import '../css/Header.css';
import { Link, useLocation } from "react-router-dom";

class Header extends Component {

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onClickLink = (event) => {
        document.getElementById('menu-toggle').checked = false
    }

    render() {
        return (
            <header>
                <div className="header-div">
                    <div className="link-div">
                        <Link to="/">
                            <div className="logo">
                                GRIGOM <br /> PICTURES
                            </div>
                        </Link>
                    </div>
                    <div className="menu-div">
                        <input id="menu-toggle" name="menu-toggle" type="checkbox" onChange={this.handleChecked} />
                        <label className="menu-btn" htmlFor="menu-toggle">
                            <span></span>
                        </label>

                        <ul className="menu-box">
                            <li>
                                <Link to="/" onClick={this.onClickLink}>ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/Works" onClick={this.onClickLink}>WORKS</Link>
                            </li>
                            <li>
                                <Link to="/Brands" onClick={this.onClickLink}>BRANDS</Link>
                            </li>
                            <li>
                                <Link to="/Contact" onClick={this.onClickLink}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
};
export default Header