import React, { useState } from "react";
import { TaskListProps } from "../interfaces/interface";
import {
  ListContainer,
  TaskItem,
  CompleteButton,
} from "../styles/TaskListStyles";
import { format, utcToZonedTime } from "date-fns-tz";

const TaskList: React.FC<TaskListProps> = ({ tasks, completeTask }) => {
  const [showCompleted, setShowCompleted] = useState(true);

  // Create a sorted copy of tasks
  const sortedTasks = [...tasks].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  const handleCompleteTask = (taskId: number) => {
    completeTask(taskId);
  };

  const uncompletedTasks = sortedTasks.filter((task) => !task.completed);
  const completedTasks = sortedTasks.filter((task) => task.completed);

  console.log("showCompleted:", showCompleted);
  console.log("completedTasks length:", completedTasks.length);

  return (
    <ListContainer>
      <h2>Task List</h2>
      <ul>
        {uncompletedTasks.map((task) => (
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

      {/* Completed Tasks Section */}
      {showCompleted && (
        <>
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task) => (
              <TaskItem key={task.id} className="completed">
                <strong>{task.name}</strong> -{" "}
                {`${format(utcToZonedTime(task.date, "UTC"), "MMMM dd, yyyy")}, ${
                  task.time
                }`}
              </TaskItem>
            ))}
          </ul>
        </>
      )}

      {/* Toggle button to show/hide completed tasks */}
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
      </button>
    </ListContainer>
  );
};

export default TaskList;
