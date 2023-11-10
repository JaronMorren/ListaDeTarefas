import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "./colors";

const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.darkGrey};
  padding: 15px;
  display: flex;
  margin-bottom: 45px;
  width: 100%;
`;

const NavMenuItem = styled(Link)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  text-decoration: none;
  width: 100vh;
  color: ${colors.lightGrey};

  &:hover {
    text-decoration: underline;
  }
`;

export { NavMenu, NavMenuItem };
