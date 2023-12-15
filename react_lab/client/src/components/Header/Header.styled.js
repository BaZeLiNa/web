import styled from "styled-components";
import { Inner } from "../components"

export const NavList = styled.ul`
margin-top: 0px;
display: flex;
align-items: center;
padding-left: 0;
margin-bottom: 0;
a {
  display: inline-block;
  padding: 7px 20px;
  text-decoration: none;
  color: black;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.hover {
  background-color: #d5d5d5;
  transform: scale(1.1);
}

.active {
  background-color: #e0e0e0;
}

`
export const MyInner = styled(Inner)`
  margin: 5px auto 5px auto;
`;