import "./Account.css";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import { VscHistory } from "react-icons/vsc";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import { AiOutlineLike } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";

const Account = () => {
  return (
    <MediaQuery maxWidth={768}>
      <div className="view-container">
        <div className="disp-flex flex-column ">
          <div>
            <NavLink
              to="/likedvideos"
              className="disp-flex align-center nav-button"
            >
              <AiOutlineLike className="nav-icon" />{" "}
              <span className="pl-05">Liked Videos</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/watchlater"
              className="disp-flex align-center nav-button"
            >
              <WatchLaterOutlinedIcon className="nav-icon" />{" "}
              <span className="pl-05">Watch Later</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/history"
              className="disp-flex align-center nav-button"
            >
              <VscHistory className="nav-icon" />{" "}
              <span className="pl-05">History</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/login" className="disp-flex align-center nav-button">
              <IoLogInOutline className="nav-icon" />{" "}
              <span className="pl-05">Login</span>
            </NavLink>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
};

export default Account;
