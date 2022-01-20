import Sidebar from "../../../components/Sidebar/Sidebar";
import { useData } from "../../../context/dataContext";
import { Link } from "react-router-dom";

const PlaylistListingDesktop = () => {
  const { state } = useData();
  const playlists = state?.playlists;

  return (
    <div className="view-container disp-flex width-100">
      <Sidebar />
      <div className="playlist-listing-container disp-flex">
        {playlists &&
          playlists?.map(({ _id, playlistName }) => (
            <Link to={`/playlists/${_id}`} key={_id}>
              <button className="btn btn-secondary btn-route-playlist m-1">
                {playlistName}
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlaylistListingDesktop;
