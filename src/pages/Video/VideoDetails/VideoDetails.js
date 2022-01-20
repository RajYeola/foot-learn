import "../Video.css";
import MediaQuery from "react-responsive";
import VideoDetailsDesktop from "./VideoDetailsDesktop";
import VideoDetailsMobile from "./VideoDetailsMobile";

const VideoDetails = () => {
  return (
    <div className="width-100">
      <MediaQuery minWidth={769}>
        <VideoDetailsDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <VideoDetailsMobile />
      </MediaQuery>
    </div>
  );
};

export default VideoDetails;
