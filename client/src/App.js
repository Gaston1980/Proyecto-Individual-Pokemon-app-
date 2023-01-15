import './App.css';
import { Route } from 'react-router-dom'; 
import LandingPage from './Components/LandingPage';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards';
import CardDetails from './Components/CardDetails';
import FormCreate from './Components/FormCreate';
import NavBarFilters from './Components/NavBarFilters';
import FormUpdate from './Components/FormUpdate';


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
      component={CardDetails} // aca le paso como props las propiedades history,location,match del Obj Window
    />

    <Route exact path='/home/create'>
      <FormCreate/>
    </Route>

    <Route exact path='/home/update'>
      <FormUpdate/>
    </Route>
    
    </div>  
  );
}

export default App;
