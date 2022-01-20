import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { removeVideoFromWatchLater } from "../../actions";
import { useData } from "../../context/dataContext";

const WatchLaterMobile = () => {
  const { state, dispatch } = useData();
  const watchLater = state?.watchLater;

  return (
    <div className="view-container">
      <h3 className="p-05">Watch Later</h3>

      {watchLater?.map((video) => (
        <div
          key={video._id}
          style={{ display: "grid", gridTemplateColumns: "85% 15%" }}
          className="watch-later-video-container mb-05"
        >
          <Link
            to={`/${video.id}`}
            style={{ display: "grid", gridTemplateColumns: "45% 55%" }}
          >
            <img
              src={video.videoThumbnail}
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
            <div className="ml-05 mt-05">
              <h5 style={{ color: "var(--black-1)", lineHeight: "1rem" }}>
                {video.name}
              </h5>
            </div>
          </Link>
          <div>
            <RiDeleteBin7Line
              className="mr-05 mt-05"
              style={{ float: "right", color: "var(--danger)" }}
              onClick={() => removeVideoFromWatchLater(video, dispatch)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchLaterMobile;
