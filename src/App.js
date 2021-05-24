import './App.css';
import MainComponent from "./mainComponent"
import { LoginContextProvider, LoginContext } from "./contexts/LoginContext"
import { useContext } from "react";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <MainComponent />
      </LoginContextProvider>
    </div>
  );
}

export default App;


