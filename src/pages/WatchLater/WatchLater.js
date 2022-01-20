import "./WatchLater.css";
import MediaQuery from "react-responsive";
import WatchLaterDesktop from "./WatchLaterDesktop";
import WatchLaterMobile from "./WatchLaterMobile";

const WatchLater = () => {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <WatchLaterDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <WatchLaterMobile />
      </MediaQuery>
    </div>
  );
};

export default WatchLater;
