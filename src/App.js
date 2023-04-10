import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", id: 1 },
    { name: "Clean bathroom", id: 2 },
    { name: "Car's MOT", id: 3 },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    if (newTask) {
      copyTasks.push({name: newTask, id: Date.now()});
      setTasks(copyTasks);
      setNewTask('');
    }
  };

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}><span>{task.name}</span></li>
          );
        })}
      </ul>

      <form onSubmit={handleTaskSubmit}>
        <label htmlFor="new-task">Add a new task:</label>
        <input type="text" id="new-task" onChange={handleTaskInput} value={newTask} />
        <button>Save Task</button>
      </form>
    </div>
  );
}

export default App;