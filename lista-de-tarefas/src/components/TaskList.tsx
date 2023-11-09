import React from 'react';
import Task from '../interfaces/interface';
import { CompleteButton, ListContainer, TaskItem } from '../styles/TaskListStyles';

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
    <ListContainer>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <strong>{task.name}</strong> - {task.date.toDateString()}, {task.time}
            <CompleteButton onClick={() => handleCompleteTask(task.id)}>Complete</CompleteButton>
          </TaskItem>
        ))}
      </ul>
    </ListContainer>
  );
};

export default TaskList;
