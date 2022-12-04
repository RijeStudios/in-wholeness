import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from './components/footer/footer';
import About from "./components/about/about";
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <Router  >

      <Header/>
      <Switch>

       <Route path='/' component={Home} exact  /> 
       <Route path='/about' component={About} />
       <Route path='/services' component='' />
        <Route path='/genetictesting' component='' />
        <Route path='/speaking' component='' />
        <Route path='/contact' component='' />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
   

    </Router>
  );
}

export default App;
