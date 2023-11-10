import React, { useState } from "react";
import { Button, FormContainer, Input, Label } from "../styles/TaskFormStyles";
import { useTaskContext } from "../contexts/TaskContext";
import { Task } from "../interfaces/interface";

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!taskName || !taskDate || !taskTime) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new task object
    const newTask: Task = {
      id: Date.now(),
      name: taskName,
      date: new Date(taskDate),
      time: taskTime,
      completed: false,
    };

    // Add the new task to the list
    addTask(newTask); // Fix: use addTask from context

    // Clear the form fields
    setTaskName("");
    setTaskDate("");
    setTaskTime("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <Label>
        Task Name:
        <Input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Label>
      <br />
      <Label>
        Date:
        <Input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
      </Label>
      <br />
      <Label>
        Time:
        <Input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />
      </Label>
      <br />
      <Button type="submit">Add Task</Button>
    </FormContainer>
  );
};

export default TaskForm;
