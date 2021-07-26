import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div >
    <Router>
   		 <Header/> 	
   		 <Switch>
   		 <Route path="/" exact component={ProductListing}/>
   		 <Route path="/product/:productId" exact component={ProductDetails}/>
   		 <Route>404 not found....!</Route>
   		 </Switch>
    </Router>
   
      
    </div>
  );
}

export default App;
