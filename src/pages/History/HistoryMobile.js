import { useData } from "../../context/dataContext";
import { Link } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { clearHistory, removeVideoFromHistoryVideos } from "../../actions";

const HistoryMobile = () => {
  const { state, dispatch } = useData();
  const history = state?.history;

  return (
    <div className="view-container">
      <div className="disp-flex justify-between align-center p-05">
        <h3>History</h3>
        <button
          className="btn-clear-history"
          onClick={() => clearHistory(dispatch)}
        >
          Clear All
        </button>
      </div>

      {history?.map((video) => (
        <div
          key={video._id}
          style={{ display: "grid", gridTemplateColumns: "85% 15%" }}
          className="history-video-container mb-05"
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
              onClick={() => removeVideoFromHistoryVideos(video, dispatch)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryMobile;
