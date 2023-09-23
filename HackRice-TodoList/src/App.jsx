import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personalized Productivity Dashboard</h1>
      </header>
      <div className="Dashboard">
        {/* Widget components will go here */}
        <Widget title="To-Do List" />
        <Widget title="Calendar" />
        {/* Add more widgets as needed */}
      </div>
    </div>
  );
}

export default App;
