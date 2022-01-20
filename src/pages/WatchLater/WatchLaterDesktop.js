import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { removeVideoFromWatchLater } from "../../actions";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useData } from "../../context/dataContext";

const WatchLaterDesktop = () => {
  const { state, dispatch } = useData();
  const watchLater = state?.watchLater;

  return (
    <div className="view-container disp-flex">
      <Sidebar />
      <div className="watch-later-details-container pt-1">
        <h2 className="mb-05">Watch Later</h2>

        {watchLater?.map((video) => (
          <div className="watch-later-video-container mb-1" key={video._id}>
            <Link
              to={`/${video.id}`}
              style={{ display: "grid", gridTemplateColumns: "200px 420px" }}
            >
              <img
                src={video.videoThumbnail}
                alt=""
                style={{ width: "200px", height: "140px", objectFit: "cover" }}
              />
              <div className="ml-05 mt-05">
                <h4 style={{ color: "var(--black-1)" }}>{video.name}</h4>
                <p className="channel-name mt-1">{video.channel}</p>
                <p className="video-views mt-05">{video.views} views</p>
              </div>
            </Link>
            <div>
              <RiDeleteBin7Line
                className="mt-05 mr-05 cursor-pointer"
                style={{ float: "right", color: "var(--danger)" }}
                onClick={() => removeVideoFromWatchLater(video, dispatch)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLaterDesktop;
