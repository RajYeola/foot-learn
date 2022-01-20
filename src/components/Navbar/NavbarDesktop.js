import "./Navbar.css";
import { IoFootball, IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <div className="navbar width-100 disp-flex justify-between align-center">
      <NavLink to="/">
        <div className="logo disp-flex align-center">
          <IoFootball className="logo-football" />
          <span>Footlearn</span>
        </div>
      </NavLink>
      <div className="nav-icons">
        <div className="badge-icon">
          <NavLink
            end
            to="/login"
            className="nav-1 disp-flex flex-column align-center justify-center"
            activeClassName="active-nav"
          >
            <IoPersonOutline />
            <span className="icon-name">Account</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
