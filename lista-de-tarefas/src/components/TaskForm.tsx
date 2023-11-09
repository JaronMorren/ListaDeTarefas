import React, { useState } from 'react';
import Task from '../interfaces/interface';
import { Button, FormContainer, Input, Label } from '../styles/TaskFormStyles';

interface TaskFormProps {
  onTaskAdd: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!taskName || !taskDate || !taskTime) {
      alert('Please fill in all fields');
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
    onTaskAdd(newTask);

    // Clear the form fields
    setTaskName('');
    setTaskDate('');
    setTaskTime('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <Label>
        Task Name:
        <Input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </Label>
      <br />
      <Label>
        Date:
        <Input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
      </Label>
      <br />
      <Label>
        Time:
        <Input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
      </Label>
      <br />
      <Button type="submit">Add Task</Button>
    </FormContainer>
  );
};

export default TaskForm;
