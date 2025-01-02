import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/jsl_logo.png";

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #333333;
  position: sticky;
  padding: 0px;
  margin:0px;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid #cccccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  overflow:hidden;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200%;
  padding-bottom: 0px;
  padding-up:0px;
  overflow: hidden

`;

const NavLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-right: 10px;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }
`;

const NavLinkItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-family:Lato;
  font-size: 1.1rem;
  transition: color 0.3s;

  &.active {
    background-color: #e7e1e1;
    color: #333333;
    border-radius: 5px;
    padding: 3px 3px;
  }

  &:hover {
    color: #333333;
    background-color: #e7e1e1;
    border-radius: 5px;
    padding: 3px 3px;
  }
`;

const LoginButton = styled.button`
  background-color: rgb(239, 164, 110);
  color: black;
  padding: 10px 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(253, 105, 0);
  }
`;

// Component
const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Logo src={logo} alt="Logo" />
        </NavLogo>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
        <NavLinks isOpen={isOpen}>
          <NavLinkItem>
            <StyledNavLink to="/dashboard" onClick={() => setIsOpen(false)}>
              dashboard
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="/bookings" onClick={() => setIsOpen(false)}>
              bookings
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="/shuttle" onClick={() => setIsOpen(false)}>
              shuttle
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="/cars" onClick={() => setIsOpen(false)}>
              vehicles
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="/drivers" onClick={() => setIsOpen(false)}>
              drivers
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="/user" onClick={() => setIsOpen(false)}>
              users
            </StyledNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledNavLink to="/alerts" onClick={() => setIsOpen(false)}>
              alerts
            </StyledNavLink>
          </NavLinkItem>
        </NavLinks>
        <div>
          {isAuthenticated ? (
            <LoginButton onClick={handleLogout}>Logout</LoginButton>
          ) : (
            <StyledNavLink to="/">
              <LoginButton>Login</LoginButton>
            </StyledNavLink>
          )}
        </div>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
