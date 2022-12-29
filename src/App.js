import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from './components/footer/footer';
import About from "./components/about/about";
import Services from './components/services/services';
import Genetic from './components/genetic/genetic';
import Speaking from './components/speaking/speaking';
import FAQ from './components/faq/faq';
import NotFound from './components/Pages/NotFound';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router  >

      <Header/>
      <Switch>
       <Route path='/' component={Home} exact  /> 
       <Route path='/about' component={About} />
       <Route path='/services' component={Services} />
       <Route path='/genetictesting' component={Genetic} />
       <Route path='/speaking' component={Speaking} />
       <Route path='/faq' component={FAQ} />
       <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
