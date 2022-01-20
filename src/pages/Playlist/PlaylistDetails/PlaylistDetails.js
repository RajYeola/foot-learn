import MediaQuery from "react-responsive";
import PlaylistDetailsDesktop from "./PlaylistDetailsDesktop";
import PlaylistDetailsMobile from "./PlaylistDetailsMobile";

const PlaylistDetails = () => {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <PlaylistDetailsDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <PlaylistDetailsMobile />
      </MediaQuery>
    </div>
  );
};

export default PlaylistDetails;
