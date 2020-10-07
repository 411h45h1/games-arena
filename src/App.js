import React from "react";
import "./App.css";
import AppState from "./state/AppState";
import { Header, Games } from "./components";

const App = () => {
  return (
    <AppState>
      <div className="App">
        <header className="Header">
          <Header />
        </header>
        <div className="Games">
          <Games />
        </div>
      </div>
    </AppState>
  );
};

export default App;
