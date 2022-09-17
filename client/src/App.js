import './App.css';
import { Route } from 'react-router-dom'; 
import LandingPage from './Components/LandingPage';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards';
import CardDetails from './Components/CardDetails';
import Form from './Components/Form';
import NavBarFilters from './Components/NavBarFilters';
import Home from './Components/Form';


function App() {
  return (
    
    <div className="App">
    <Route exact path='/'>
      <LandingPage/>
      </Route>

    <Route exact path='/home'>
      <NavBar/>
    </Route>

    <Route exact path='/home'>
      <NavBarFilters/>
    </Route>

    <Route exact path='/home'>
      <Cards/>
    </Route>


    <Route path={'/home/details/:id'}
      component={CardDetails} // aca le paso las props del Obj Window - match.params
    />

    
    <Route exact path='/home/create'>
      <Form/>
    </Route>
    



    </div>
    
  );
}

export default App;
