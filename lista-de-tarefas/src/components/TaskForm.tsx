import React, { useState } from 'react';
import Task from '../interfaces/interface';

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
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
      </label>
      <br />
      <label>
        Time:
        <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
