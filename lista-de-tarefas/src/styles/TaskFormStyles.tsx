import styled from "styled-components";
import colors from "./colors";

export const FormContainer = styled.form`
  background-color: ${colors.lightGrey};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 300px;
  max-width: 600px;
  padding: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  flex-direction: row;
`;

export const Label = styled.label`
  color: ${colors.darkGrey};
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${colors.lightGrey};
`;


