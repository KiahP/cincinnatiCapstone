import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home  from './components/Home';
import About  from './components/About';
import EatLocal  from './components/EatLocal';
import ShopLocal  from './components/ShopLocal';
import Attractions  from './components/Attractions';
import CincyHistory  from './components/CincyHistory';
import Contact  from './components/Contact';
import CreateRestaurant from './components/CreateRestaurant';
import CreateHistory from './components/CreateHistory';
import CreateShop from './components/CreateShop';
import CreateAttraction from './components/CreateAttraction';


export default class App extends Component{
  render(){
  return (

    <Router>
    <div className='App'>
    <Navbar />
 
    <Switch>  
     <Route exact path='/' component={Home} />
     <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
     <Route path='/attraction' component={Attractions} />  
     <Route path='/shop' component={ShopLocal} />
     <Route path='/restaurant' component={EatLocal} />
     <Route path='/history' component={CincyHistory} />
     <Route exact path='/create' component={CreateRestaurant} />
     <Route path='/createRestaurant' component={CreateRestaurant} />
     <Route path='/createHistory' component={CreateHistory} />
     <Route path='/createAttraction' component={CreateAttraction} />
     <Route path='/createShop' component={CreateShop} />
 
    </Switch> 
     <Footer /> 
    </div>
  
    </Router>
    
  );
}
}

