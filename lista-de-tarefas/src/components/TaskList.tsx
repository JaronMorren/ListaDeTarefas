import React from "react";
import { TaskListProps } from "../interfaces/interface";
import {
  ListContainer,
  TaskItem,
  CompleteButton,
} from "../styles/TaskListStyles";
import { format, utcToZonedTime } from "date-fns-tz";

const TaskList: React.FC<TaskListProps> = ({ tasks, completeTask }) => {
  // Create a sorted copy of tasks
  const sortedTasks = [...tasks].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  const handleCompleteTask = (taskId: number) => {
    completeTask(taskId);
  };

  return (
    <ListContainer>
      <h2>Task List</h2>
      <ul>
        {sortedTasks.map((task) => (
          <TaskItem key={task.id} className={task.completed ? "completed" : ""}>
            <strong>{task.name}</strong> -{" "}
            {`${format(utcToZonedTime(task.date, "UTC"), "MMMM dd, yyyy")}, ${
              task.time
            }`}
            <CompleteButton onClick={() => handleCompleteTask(task.id)}>
              Complete
            </CompleteButton>
          </TaskItem>
        ))}
      </ul>
    </ListContainer>
  );
};

export default TaskList;
