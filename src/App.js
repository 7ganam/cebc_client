import './App.css';
import MainComponent from "./mainComponent"
import { LoginContextProvider, LoginContext } from "./contexts/LoginContext"
import { useContext } from "react";
import ReactGA from 'react-ga'
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    ReactGA.initialize('G-4SWKZ09KLN');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])


  return (
    <div className="App">
      <LoginContextProvider>
        <MainComponent />
      </LoginContextProvider>
    </div>
  );
}

export default App;


