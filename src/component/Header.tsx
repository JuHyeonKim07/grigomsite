import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css';

function Header() {

    const onClickLink = () => {
        const inputCheckElement = document.getElementById('menu-toggle') as HTMLInputElement
        inputCheckElement.checked = false;
    }

    return (
        <header>
            <div className="header-container">
                <div className="title-div">
                    <Link to="/">
                        GRIGOM <br /> PICTURES
                    </Link>
                </div>

                <div className="menu-div">
                    <input id="menu-toggle" name="menu-toggle" type="checkbox" />
                    <label className="menu-btn" htmlFor="menu-toggle">
                        <span></span>
                    </label>

                    <ul className="menu-box">
                        <li>
                            <Link to="/" onClick={onClickLink}>ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/Works" onClick={onClickLink}>WORKS</Link>
                        </li>
                        <li>
                            <Link to="/Brands" onClick={onClickLink}>BRANDS</Link>
                        </li>
                        <li>
                            <Link to="/Contact" onClick={onClickLink}>CONTACT</Link>
                        </li>
                    </ul>
                </div>

                <div className="service-div">
                   
                </div>
            </div>
        </header>
    );
};
export default Header