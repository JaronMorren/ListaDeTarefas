import styled from "styled-components";
import colors from "../styles/colors";

export const Button = styled.button`
  background-color: ${colors.lightGrey};
  color: ${colors.darkGrey};
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #f5f5f5;
  }
`;
