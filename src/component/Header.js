import React from "react";
import '../css/Header.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around">
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
                <span>Instagram</span>
                <span>YouTube</span>
                <span>Viemo</span>
            </div>
        </div>
    );
};
export default Header