import React from "react";
import { Wrapper, LogoImg } from "../components";
import { NavList, MyInner } from "./Header.styled";
import CarLogo from "./logo.png"
import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
      <Wrapper>
        <MyInner>
          <a href="/">
            <LogoImg src={CarLogo} alt={"car"} />
          </a>
          <NavList>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink exact to="/Catalog" activeClassName="active">
              Catalog
            </NavLink>
            <NavLink exact to="/Cart" activeClassName="active">
              Cart
            </NavLink>
          </NavList>
        </MyInner>
      </Wrapper>
    );
};
export default Header;