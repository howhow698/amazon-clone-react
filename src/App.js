import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

// global state manager
import { useStateValue } from './StateProvider';
import { ActionType } from './reducer';

// firebase
import { auth } from './config/firebase';

function App() {
  const [{}, dispatch] = useStateValue();

  // create a listener - always keep track on who is signing
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is >>> ', authUser);
      dispatch({
        type: ActionType.SET_USER,
        user: authUser ? authUser : null
      });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
