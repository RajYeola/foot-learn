import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { VscHome, VscHistory } from "react-icons/vsc";
import { MdPlaylistPlay } from "react-icons/md";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import { AiOutlineLike } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="pt-05">
        <NavLink
          className="disp-flex align-center page-container"
          to="/"
          end
          activeClassName="active-page"
        >
          <VscHome className="page-icon" />{" "}
          <span className="page-name pl-05">Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          className="disp-flex align-center page-container"
          to="/playlists"
          end
          activeClassName="active-page"
        >
          <MdPlaylistPlay className="page-icon" />{" "}
          <span className="page-name pl-05">Playlist</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          className="disp-flex align-center page-container"
          to="/history"
          end
          activeClassName="active-page"
        >
          <VscHistory className="page-icon" />{" "}
          <span className="page-name pl-05">History</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          className="disp-flex align-center page-container"
          to="/watchlater"
          end
          activeClassName="active-page"
        >
          <WatchLaterOutlinedIcon className="page-icon" />{" "}
          <span className="page-name pl-05">Watch Later</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          className="disp-flex align-center page-container"
          to="/likedvideos"
          end
          activeClassName="active-page"
          style={{ borderBottom: "none" }}
        >
          <AiOutlineLike className="page-icon" />{" "}
          <span className="page-name pl-05">Liked Videos</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
