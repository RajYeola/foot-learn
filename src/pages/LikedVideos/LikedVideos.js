import "./LikedVideos.css";
import MediaQuery from "react-responsive";
import LikedVideosDesktop from "./LikedVideosDesktop";
import LikedVideosMobile from "./LikedVideosMobile";

const LikedVideos = () => {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <LikedVideosDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <LikedVideosMobile />
      </MediaQuery>
    </div>
  );
};

export default LikedVideos;
