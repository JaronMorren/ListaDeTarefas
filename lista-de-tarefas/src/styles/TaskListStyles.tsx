import styled from "styled-components";
import colors from "./colors";

export const ListContainer = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TaskItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  padding: 8px;
  width: 100vh;
`;

export const SpanContainer = styled.span`
  border-radius: 8px;
  align-items: center;
  padding: 20px;
`;

export const CompletedContainer = styled.div`
  display: flex;
  // background-color: darkGrey;
  justify-content: center;
  align-items: center;
  min-width: 100vh;
  padding: 35px;
`;
