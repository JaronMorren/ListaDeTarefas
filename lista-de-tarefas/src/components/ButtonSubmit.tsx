import styled from "styled-components";
import colors from "../styles/colors";

export const ButtonSubmit = styled.button`
  background-color: ${colors.darkGrey};
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${colors.darkGrey};
  }
`;
