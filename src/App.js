import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from './components/footer/footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/about/about";


function App() {
  return (
    <Router>

      <Header/>
       <Route path='/' exact component={Home} /> 
       <Route path='/about' component='' />
       <Route path='/services' component='' />
        <Route path='/genetictesting' component='' />
        <Route path='/speaking' component='' />
        <Route path='/contact' component='' />
      <Home/>
      <About/>
      <Footer/>
   

    </Router>
  );
}

export default App;
