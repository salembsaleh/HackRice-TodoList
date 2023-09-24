// App.jsx
import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewsWidget from "./components/NewsWidget";
import WeatherWidget from "./components/weatherwidget";

function App() {
  const [widgets, setWidgets] = useState([]);
  const [widgetId, setWidgetId] = useState(0);

  const addWidget = (component) => {
    const id = widgetId + 1;
    setWidgetId(id);
    setWidgets([
      ...widgets,
      React.cloneElement(component, {
        key: id,
        widgetId: id,
        removeWidget,
      }),
    ]);
  };

  const removeWidget = (widgetId) => {
    const updatedWidgets = widgets.filter((widget) => widget.key !== widgetId);
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
          <button onClick={() => addWidget(<TodoList />)}>
            Add To-Do List
          </button>
          <button onClick={() => addWidget(<NewsWidget />)}>Add News</button>
          <button onClick={() => addWidget(<WeatherWidget />)}>
            Add Weather
          </button>
        </div>
        <div className="Dashboard">{widgets}</div>
      </div>
    </div>
  );
}

export default App;
