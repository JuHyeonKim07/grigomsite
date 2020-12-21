import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './component/Header'
import What from './pages/What'
import Brands from './pages/Brands'
import Works from './pages/Works'


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={What}/>
                <Route path="/Brands" component={Brands}/>
                <Route path="/Works" component={Works}/>
            </Switch>
        </div>
    );
}

export default App;