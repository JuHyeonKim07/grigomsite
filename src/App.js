import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './component/Header'
import About from './pages/About'
import Brands from './pages/Brands'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Details from './pages/Details'
import Footer from './component/Footer'
import axios from "axios";

function App() {
    const accessToken = "da231ec06f876ff503b91d8152a722a2"
    const userid = '129526601'
    const [data, setData] = useState([]);

    // useEffect는 비동기적으로 동작
    useEffect(() => {
        // get user all upload List
        async function uploaded_List() {
            await axios.get(`https://api.vimeo.com/users/${userid}/videos`, {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                }
            }).then(res => {
                setData(res.data.data)
                console.log(res.data.data)
            }).catch(error => console.error(error))
        }

        uploaded_List();
    }, []);

    return (
        <div>
            <Header/>
            <Route exact path="/" component={About}/>
            <Switch>
                <Route path="/Brands" component={Brands}/>
                <Route path="/Works" component={Works}/>
                <Route path="/Contact" component={Contact}/>
                {/*<Route path="/Details" component={Details}/>*/}
                <Route path="/Details/:data" component={Details}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;