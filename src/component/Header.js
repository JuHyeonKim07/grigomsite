import React from "react";
import '../css/Header.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const Header = () => {
    return (
        <div className="title-flex">
            <div className="title-box1">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">WHAT</Link>
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
            </div>

            <div className="title-box2">
                Grigom Pictures
            </div>

            <div className="title-box3">
                <a href="https://google.com" target="_blank">
                    <img src="/logo/vimeo.svg" alt="vimeo" width="30" height="30"/>
                </a>
            </div>
        </div>
    );
};
export default Header