import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
     
      <Switch>
      

        <Route path="/detail">
          <Header/>
          <Detail/>
        </Route>

        <Route path="/">
          <Header/>
          <Home/>
        </Route>
     
      </Switch>
    


      
    </div>
    </Router>
   
  );
}

export default App;
