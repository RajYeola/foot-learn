import { useData } from "../../../context/dataContext";
import { Link } from "react-router-dom";

const PlaylistListingMobile = () => {
  const { state } = useData();
  const playlists = state?.playlists;

  return (
    <div className="view-container">
      {playlists &&
        playlists?.map(({ _id, playlistName }) => (
          <Link to={`/playlists/${_id}`} key={_id}>
            <button className="btn btn-secondary btn-route-playlist m-05">
              {playlistName}
            </button>
          </Link>
        ))}
    </div>
  );
};

export default PlaylistListingMobile;
