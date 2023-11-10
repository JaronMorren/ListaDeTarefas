import React, { useState } from "react";
import {
  FormContainer,
  Input,
  InputContainer,
  Label,
} from "../styles/TaskFormStyles";
import { useTaskContext } from "../contexts/UseTaskContext";
import { Task } from "../interfaces/interface";
import { ButtonSubmit } from "../components/ButtonSubmit";
import { Heading } from "../components/Heading";

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskName || !taskDate || !taskTime) {
      alert("Please fill in all fields");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      name: taskName,
      date: new Date(taskDate),
      time: taskTime,
      completed: false,
    };

    addTask(newTask);

    setTaskName("");
    setTaskDate("");
    setTaskTime("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Heading>Let's create your task</Heading>
      <InputContainer>
        <Label>
          Task Name:
          <br />
          <Input
            type="text"
            value={taskName}
            placeholder="Insert task"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Label>
        <Label>
          Date:
          <br />
          <Input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </Label>
        <Label>
          Time:
          <br />
          <Input
            type="time"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
          />
        </Label>
        <ButtonSubmit type="submit">Create</ButtonSubmit>
      </InputContainer>
    </FormContainer>
  );
};

export default TaskForm;
