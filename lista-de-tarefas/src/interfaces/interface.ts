interface Task {
  id: number;
  name: string;
  date: Date;
  time: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  completeTask: (taskId: number) => void;
}

export type { Task, TaskListProps };
