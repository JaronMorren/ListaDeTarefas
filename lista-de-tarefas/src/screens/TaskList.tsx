import React, { useState } from "react";
import { TaskListProps } from "../interfaces/interface";
import {
  ListContainer,
  SpanContainer,
  TaskItem,
  CompletedContainer,
} from "../styles/TaskListStyles";
import { format, utcToZonedTime } from "date-fns-tz";

import { useTaskContext } from "../contexts/UseTaskContext";
import Checkbox from "../components/Checkbox";
import { Button } from "../components/Button";
import { ButtonSubmit } from "../components/ButtonSubmit";
import { Heading } from "../components/Heading";

const TaskList: React.FC<TaskListProps> = () => {
  const [showCompleted, setShowCompleted] = useState(true);
  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const { tasks, completeTask } = useTaskContext();

  const sortedTasks = [...tasks].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
  const handleCompleteTask = (taskId: number) => {
    setCheckedTasks((prevCheckedTasks) =>
      prevCheckedTasks.includes(taskId)
        ? prevCheckedTasks.filter((id) => id !== taskId)
        : [...prevCheckedTasks, taskId]
    );

    completeTask(taskId);
  };
  const uncompletedTasks = sortedTasks.filter((task) => !task.completed);
  const completedTasks = sortedTasks.filter((task) => task.completed);

  return (
    <>
      <ListContainer>
        <Heading>Task List</Heading>
        <ul>
          {uncompletedTasks.map((task) => (
            <TaskItem>
              <Button
                onClick={() => {
                  handleCompleteTask(task.id);
                }}
              >
                <Checkbox checked={checkedTasks.includes(task.id)} />
                <SpanContainer key={task.id}>{`${task.name} - ${format(
                  utcToZonedTime(task.date, "UTC"),
                  "MMMM dd, yyyy"
                )}, ${task.time}`}</SpanContainer>
              </Button>
            </TaskItem>
          ))}
        </ul>

        <CompletedContainer>
          {showCompleted && (
            <ul>
              <Heading>Completed Tasks</Heading>
              {completedTasks.map((task) => (
                <TaskItem>
                  <Checkbox checked={checkedTasks.includes(task.id)} />
                  <SpanContainer key={task.id}>{`${task.name} - ${format(
                    utcToZonedTime(task.date, "UTC"),
                    "MMMM dd, yyyy"
                  )}, ${task.time}`}</SpanContainer>
                </TaskItem>
              ))}
            </ul>
          )}
        </CompletedContainer>
        <ButtonSubmit onClick={() => setShowCompleted(!showCompleted)}>
          {!showCompleted ? "Show Completed Tasks" : "Hide Completed Tasks"}
        </ButtonSubmit>
      </ListContainer>
    </>
  );
};

export default TaskList;
