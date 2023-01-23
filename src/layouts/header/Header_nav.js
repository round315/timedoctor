import {
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

function Header_nav() {
  return (
    <Nav className="me-auto text-header">
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          DASHBOARD
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Team</DropdownItem>
          <DropdownItem>User</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          REPORTS
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Activity Summary</DropdownItem>
          <DropdownItem>Attendance</DropdownItem>
          <DropdownItem>Hours Tracked</DropdownItem>
          <DropdownItem>Projects & Tasks</DropdownItem>
          <DropdownItem>Timeline</DropdownItem>
          <DropdownItem>Web & Ap Usage</DropdownItem>
          <DropdownItem>Custom Export</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem>
        <NavLink href="#">EDIT TIME</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          SETTINGS
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Billing</DropdownItem>
          <DropdownItem>Project & Task settings</DropdownItem>
          <DropdownItem>Productivity Ratings</DropdownItem>
          <DropdownItem>users</DropdownItem>
          <DropdownItem>Groups</DropdownItem>
          <DropdownItem>Email Notifications</DropdownItem>
          <DropdownItem>Integrations</DropdownItem>
          <DropdownItem>Company Settings</DropdownItem>
          <DropdownItem>Work Schedules</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem>
        <NavLink href="#">PAYROLL</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">INVITE</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">DOWNLOAD</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Header_nav;

