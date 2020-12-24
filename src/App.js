import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './component/Header'
import What from './pages/What'
import Brands from './pages/Brands'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Footer from './component/Footer'

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={What}/>
                <Route path="/Brands" component={Brands}/>
                <Route path="/Works" component={Works}/>
                <Route path="/Contact" component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;