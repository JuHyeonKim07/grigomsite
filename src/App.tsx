import { Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import About from "./pages/About/About";
import Brands from './pages/Brands/Brands';
import Contact from './pages/Contact/Contact';
import Details from './pages/Details/Details';
import Works from './pages/Works/Works';
import './pages/About/About.css'
import './pages/Brands/Brands.css'
import './pages/Contact/Contact.css'
import './pages/Details/Details.css'
import './pages/Works/Works.css'
import './component/Category/Category.css'


function App() {
    return (
        <>
            <div className="wrapper">
                <header>
                    <Header />
                </header>
                <main>
                    <section>
                        <Route exact path="/" component={About} />
                        <Switch>
                            <Route path="/Brands" component={Brands} />
                            <Route path="/Works" component={Works} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Details/:type/:data" component={Details} />
                        </Switch>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>
    )
}
export default App;