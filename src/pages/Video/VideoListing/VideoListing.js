import MediaQuery from "react-responsive";
import VideoListingDesktop from "./VideoListingDesktop";
import VideoListingMobile from "./VideoListingMobile";

const VideoListing = () => {
  return (
    <div className="width-100">
      <MediaQuery minWidth={769}>
        <VideoListingDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <VideoListingMobile />
      </MediaQuery>
    </div>
  );
};

export default VideoListing;
