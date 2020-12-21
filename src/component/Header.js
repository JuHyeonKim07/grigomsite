import React from "react";
import '../css/Header.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around items-center">
            <div>
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
                    </ul>
                </nav>
            </div>

            <div>
                Grigom Pictures
            </div>

            <div>
                <img src="/logo/youtube.svg" alt="youtube" width="50" height="50"/>
                <img src="/logo/vimeo.svg" alt="vimeo" width="50" height="50"/>
            </div>
        </div>
    );
};
export default Header