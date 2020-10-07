import React from "react";
import "./App.css";
import AppState from "./state/AppState";
import Games from "./components/Games";

const App = () => {
  return (
    <AppState>
      <div className="App">
        <header className="Header">
          <h1>Games Arena</h1>
        </header>
        <div className="Games">
          <Games />
        </div>
      </div>
    </AppState>
  );
};

export default App;
