import React from "react";
import '../css/Header.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


const Header = () => {


    return (
        <header>
            <div className="logo">
                GRIGOM <br/> PICTURES
            </div>

            <nav>
                <ul className="nav_links">
                    <li>
                        <Link to="/">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/Works">WORKS</Link>
                    </li>
                    <li>
                        <Link to="/Brands">BRANDS</Link>
                    </li>
                    <li>
                        <Link to="/Contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header