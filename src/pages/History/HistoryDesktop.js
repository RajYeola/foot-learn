import Sidebar from "../../components/Sidebar/Sidebar";
import { useData } from "../../context/dataContext";
import { Link } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { clearHistory, removeVideoFromHistoryVideos } from "../../actions";

const HistoryDesktop = () => {
  const { state, dispatch } = useData();
  const history = state?.history;

  return (
    <div className="view-container disp-flex">
      <Sidebar />
      <div className="history-details-container pt-1">
        <div className="disp-flex justify-between mb-1">
          <h2>History</h2>
          <button
            className="btn-clear-history"
            onClick={() => clearHistory(dispatch)}
          >
            Clear All
          </button>
        </div>

        {history?.map((video) => (
          <div className="history-video-container mb-1" key={video._id}>
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
                onClick={() => removeVideoFromHistoryVideos(video, dispatch)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryDesktop;
