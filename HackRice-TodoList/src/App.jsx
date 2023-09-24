
import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewsWidget from './components/NewsWidget';
import WeatherWidget from "./components/weatherwidget";

function App() {
  const [widgets, setWidgets] = useState([]);
  const [showAddButton, setShowAddButton] = useState(true);

  const addTodoList = () => {
    setShowAddButton(false);
    setWidgets([
      ...widgets,
      <TodoList
        key={Date.now()}
        removeWidget={() => removeWidget(widgets.length)}
        showAddButton={setShowAddButton}
      />,
    ]);
  };

  const addNewsWidget = () => {
    setWidgets([
      ...widgets,

      <NewsWidget key={Date.now()} removeWidget={() => removeWidget(widgets.length)} />,
      <TodoList
        key={Date.now()}
        removeWidget={() => removeWidget(widgets.length)}
        showAddButton={setShowAddButton}
      />,
    ]);
  };
  const addWeatherWidget = () => {
    setWidgets([
      ...widgets,
      <WeatherWidget key={Date.now()} removeWidget={removeWidget} />,
    ]);
  };

  const removeWidget = (widgetIndex) => {
    const updatedWidgets = widgets.filter((_, index) => index !== widgetIndex);
    setWidgets(updatedWidgets);
    setShowAddButton(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personalized Productivity Dashboard</h1>
      </header>
      <div className="Widgets">
        <div className="WidgetSelector">
          <h2>Available Widgets</h2>
          {showAddButton && <button onClick={addTodoList}>Add To-Do List</button>}
          <button onClick={addNewsWidget}>Add News Widget</button>
          <button onClick={addWeatherWidget}>Add Weather Widget</button>

        </div>
        <div className="Dashboard">
          {widgets.map((widget, index) => (
            <div className="WidgetContainer" key={index}>
              {widget}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
