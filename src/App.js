import "./App.css";
import Header from "./Compnents/Header/Header";
import Home from "./Compnents/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Compnents/Checkout/Checkout";
import React, { useEffect } from "react";
import Login from "./Compnents/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
function App() {
const [{},dispatch] =  useStateValue();
  useEffect(()=>{

    // will only run once when the app component loads 
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser){
        //the user is / was logged in
        dispatch({
          type : 'SET_USER',
          user : authUser,
        })
      }else{
        //the user is loggrd out 
        dispatch({
          type: "SET_USER",
          user : null,
        })
      }
    });
  },[])

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
