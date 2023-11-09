import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../interfaces/interface';

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  completeTask: (taskId: number) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks.filter((task) => !task.completed));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export { TaskProvider, useTaskContext };
