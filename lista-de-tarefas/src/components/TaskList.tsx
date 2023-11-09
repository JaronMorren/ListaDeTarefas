import { TaskListProps } from "../interfaces/interface";
import { ListContainer, TaskItem, CompleteButton } from "../styles/TaskListStyles";

const TaskList: React.FC<TaskListProps> = ({ tasks, completeTask }) => {
  // Sort tasks by date and time
  tasks.sort((a, b) => a.date.getTime() - b.date.getTime());

  const handleCompleteTask = (taskId: number) => {
    completeTask(taskId);
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

