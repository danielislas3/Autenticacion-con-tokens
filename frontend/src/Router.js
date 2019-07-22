import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

export default function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/profile" component={Profile}/>
    </Switch>
    </BrowserRouter>
  )
}
