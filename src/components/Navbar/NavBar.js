import React from "react";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavBarStyles";

import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <IconContext.Provider>
      <NavbarContainer>
        <NavLogo>
          <NavIcon src="./assets/logo.png" alt="logo">
            Delta
          </NavIcon>
        </NavLogo>
        <MobileIcon>{show ? <FaTimes /> : <CgMenuRight />}</MobileIcon>
        <NavMenu>
          {data.map((el, index) => {
            <NavItem key={index}>
              <NavLinks>{el.text}</NavLinks>
            </NavItem>;
          })}
        </NavMenu>
      </NavbarContainer>
    </IconContext.Provider>
  );
};

export default NavBar;
