import React, {Component} from "react";
import { Route, Switch} from "react-router-dom";

import Header from './component/Header'
import About from './pages/About'
import Brands from './pages/Brands'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Details from './pages/Details'
import Footer from './component/Footer'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentWillUnmount = () => {
        localStorage.clear();
    }

    render(){
        return(
            <div>
                <Header/>
                <Route exact path="/" component={About}/>
                <Switch>
                    <Route path="/Brands" component={Brands}/>
                    <Route path="/Works" component={Works}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route path="/Details/:data" component={Details}/>
                </Switch>
            <Footer/>
        </div>
        )
    }
}
export default App;