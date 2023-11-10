import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./screens/TaskForm";
import TaskList from "./screens/TaskList";
import { useTaskContext } from "./contexts/UseTaskContext";
import "./App.css";
import { NavMenu, NavMenuItem } from "./styles/NavMenuStyles";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 35px;
`;
const App: React.FC = () => {
  const { tasks, completeTask } = useTaskContext();

  return (
    <Router>
      <Layout>
        <NavMenu>
          <NavMenuItem to="/">Task Form</NavMenuItem>
          <NavMenuItem to="/todo-list">Task List</NavMenuItem>
        </NavMenu>

        <Routes>
          <Route path="/" element={<TaskForm />} />
          <Route
            path="/todo-list"
            element={<TaskList tasks={tasks} completeTask={completeTask} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
