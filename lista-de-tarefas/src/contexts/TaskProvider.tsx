// TaskProvider.tsx
import React, { useState, ReactNode, createContext } from "react";
import { Task } from "../interfaces/interface";

interface TaskProviderProps {
  children: ReactNode;
}
interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  completeTask: (taskId: number) => void;
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

export { TaskProvider, TaskContext };
