import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function User_nav() {
  return (
    <Nav className="me-auto">
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          DASHBOARD
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Team</DropdownItem>
          <DropdownItem>User</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem>
        <NavLink href="#">DOWNLOAD</NavLink>
      </NavItem>
    </Nav>
  );
}

export default User_nav;
