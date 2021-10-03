import React from "react";
import {
  ProfileMenuContainer,
  ProfileMenuLink,
  ProfileMenuButton
} from "./navbarStyles";
import {useState} from "react";
import { useHistory } from "react-router";
const NavbarProfileMenu = ({ open }) => {
  const history =  useHistory();
  const logout = () => {
    localStorage.clear();
    history.push('/login-page');
    history.go(0);
  //  window.location.reload();
   
}


  return open ? (
    <ProfileMenuContainer>
      <ProfileMenuLink href="https://open.spotify.com" target="_blank">
        Account
      </ProfileMenuLink>
      <ProfileMenuButton onClick={()=>logout()}  >
        Log out
      </ProfileMenuButton>
    </ProfileMenuContainer>
  ) : null;
};

export default NavbarProfileMenu;
