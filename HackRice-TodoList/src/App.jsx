import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [widgets, setWidgets] = useState([]);

  const addTodoList = () => {
    setWidgets([
      ...widgets,
      <TodoList key={Date.now()} removeWidget={removeWidget} />,
    ]);
  };

  const removeWidget = (widgetIndex) => {
    const updatedWidgets = widgets.filter((_, index) => index !== widgetIndex);
    setWidgets(updatedWidgets);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personalized Productivity Dashboard</h1>
      </header>
      <div className="Widgets">
        <div className="WidgetSelector">
          <h2>Available Widgets</h2>
          <button onClick={addTodoList}>Add To-Do List</button>
          {/* Add buttons for other widgets here */}
        </div>
        <div className="Dashboard">
          {widgets.map((widget, index) => (
            <div className="WidgetContainer" key={index}>
              {widget}
              <button onClick={() => removeWidget(index)}>
                Remove TodoList
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
