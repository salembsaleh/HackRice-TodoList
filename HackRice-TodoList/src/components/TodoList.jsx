import React, { useState } from "react";
import "./TodoList.css";

const TodoList = ({ removeWidget, showAddButton, widgetIndex }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    showAddButton(true);
  };

  return (
    <div className="Widget">
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => removeWidget(widgetIndex)}>Remove</button>
    </div>
  );
};

export default TodoList;
