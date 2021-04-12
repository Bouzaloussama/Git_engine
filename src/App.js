import logo from './logo.svg';
import './App.css';
import Navbar from './components/partials/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/users/Users';
import UserItem from './components/users/UserItem';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/users" component={Users}/>
          <Route exact path="/users/:login" component={UserItem}/>
          <Route exact component={Users}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
