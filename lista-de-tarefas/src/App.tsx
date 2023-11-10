import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTaskContext } from "./contexts/TaskContext";

const App: React.FC = () => {
  const { tasks, completeTask } = useTaskContext();

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
          <Route
            path="/"
            element={<TaskList tasks={tasks} completeTask={completeTask} />}
          />
          <Route path="/add-task" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
