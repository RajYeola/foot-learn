import "../Playlist.css";
import MediaQuery from "react-responsive";
import PlaylistListingDesktop from "./PlaylistListingDesktop";
import PlaylistListingMobile from "./PlaylistListingMobile";

const Playlist = () => {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <PlaylistListingDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <PlaylistListingMobile />
      </MediaQuery>
    </div>
  );
};

export default Playlist;
