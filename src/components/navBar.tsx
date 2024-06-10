import React from "react";
import NavBarDesktop from "./navBarDesktop";
import { NavBarMobile } from "./navBarMobile";

function NavBar() {
  return (
    <React.Fragment>
      <NavBarDesktop />
      <NavBarMobile />
    </React.Fragment>
  );
}

export default NavBar;
