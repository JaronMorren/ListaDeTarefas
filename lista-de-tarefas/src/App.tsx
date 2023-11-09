import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Task from './interfaces/interface';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  
  const handleTaskAdd = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskComplete = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks.filter((task) => !task.completed));
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Task List</Link>
            </li>
            <li>
              <Link to="/add-task">Add Task</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/add-task" element={<TaskForm onTaskAdd={handleTaskAdd} />} />
          <Route path="/" element={<TaskList tasks={tasks} onTaskComplete={handleTaskComplete} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

