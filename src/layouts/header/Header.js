import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { IoIosNotifications } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";

import Header_nav from "./Header_nav";
import User_nav from "./User_nav";

function Header() {
  return (
    <div>
      <Navbar className="App-header px-2 text-header">
        <NavbarBrand href="/">
          <img
            src="https://2.timedoctor.com/assets/images/brand/timedoctor/logo_gray.svg"
            alt="TD"
          />
        </NavbarBrand>
        <Header_nav />
        <IoIosNotifications style={{ fontSize: 24, color: "white" }} />
        <BsQuestionCircle style={{ fontSize: 24, color: "white" }} />
        <NavbarText>round's Company</NavbarText>
        <User_nav />
      </Navbar>
    </div>
  );
}

export default Header;
