import React from 'react';
import Task from '../interfaces/interface';

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete }) => {
  // Sort tasks by date and time
  tasks.sort((a, b) => a.date.getTime() - b.date.getTime());

  const handleCompleteTask = (taskId: number) => {
    onTaskComplete(taskId);
};
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong> - {task.date.toDateString()}, {task.time}
            <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
