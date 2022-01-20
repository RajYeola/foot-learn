import { NavLink } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { MdPlaylistPlay } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const NavbarMobile = () => {
  return (
    <div className="mobile-nav disp-flex width-100">
      <div className="nav-1">
        <NavLink
          end
          to="/"
          className="nav-2 disp-flex flex-column justify-center align-center"
          activeClassName="active-nav"
        >
          <VscHome className="nav-icon"></VscHome>
          <p>Home</p>
        </NavLink>
      </div>

      <div className="nav-1">
        <NavLink
          end
          to="/playlists"
          className="nav-2 disp-flex flex-column justify-center align-center"
          activeClassName="active-nav"
        >
          <MdPlaylistPlay className="nav-icon"></MdPlaylistPlay>
          <p>My Playlists</p>
        </NavLink>
      </div>

      <div className="nav-1">
        <NavLink
          end
          to="/account"
          className="nav-2 disp-flex flex-column justify-center align-center"
          activeClassName="active-nav"
        >
          <IoPersonOutline className="nav-icon"></IoPersonOutline>
          <p>Account</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarMobile;
