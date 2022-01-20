import "../Video.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import { isVideoAlreadyInHistory } from "../../../utils/utils";
import { addVideoToHistoryVideos } from "../../../actions";

const VideoListingMobile = () => {
  const { videoData, dispatch, state } = useData();
  const history = state?.history;
  const [currentGenre, setCurrentGenre] = useState("All");

  const getFilteredData = (videos, currentGenre) => {
    if (currentGenre === "All") {
      return videos;
    }
    return videos.filter(({ genre }) => genre === currentGenre);
  };

  const filteredData = getFilteredData(videoData, currentGenre);

  return (
    <div className="width-100">
      <div className="genre-mobile-container">
        <button
          onClick={() => setCurrentGenre("All")}
          className={`genre-btn ml-1 mr-05 my-05 ${
            currentGenre === "All" ? "selected" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setCurrentGenre("Dribbling")}
          className={`genre-btn mr-05 my-05 ${
            currentGenre === "Dribbling" ? "selected" : ""
          }`}
        >
          Dribbling
        </button>
        <button
          onClick={() => setCurrentGenre("Juggling/Freestyle")}
          className={`genre-btn mr-05 my-05 ${
            currentGenre === "Juggling/Freestyle" ? "selected" : ""
          }`}
        >
          Juggling/Freestyle
        </button>
        <button
          onClick={() => setCurrentGenre("Free Kicks")}
          className={`genre-btn mr-05 my-05 ${
            currentGenre === "Free Kicks" ? "selected" : ""
          }`}
        >
          Free Kicks
        </button>
        <button
          onClick={() => setCurrentGenre("GoalKeeping")}
          className={`genre-btn mr-05 my-05 ${
            currentGenre === "GoalKeeping" ? "selected" : ""
          }`}
        >
          Goalkeeping
        </button>
        <button
          onClick={() => setCurrentGenre("Passing")}
          className={`genre-btn mr-05 my-05 ${
            currentGenre === "Passing" ? "selected" : ""
          }`}
        >
          Passing
        </button>
        <button
          onClick={() => setCurrentGenre("Shooting")}
          className={`genre-btn mr-05 my-05 ${
            currentGenre === "Shooting" ? "selected" : ""
          }`}
        >
          Shooting
        </button>
        <button
          onClick={() => setCurrentGenre("Tackling")}
          className={`genre-btn mr-1 my-05 ${
            currentGenre === "Tackling" ? "selected" : ""
          }`}
        >
          Tackling
        </button>
      </div>
      <div className="disp-flex">
        {filteredData &&
          filteredData?.map((video) => (
            <div key={video.id}>
              <Link
                to={`/${video.id}`}
                onClick={() => {
                  !isVideoAlreadyInHistory(video, history) &&
                    addVideoToHistoryVideos(video, dispatch);
                }}
              >
                <div className="video-card">
                  <img
                    src={video.videoThumbnail}
                    alt="videoThumbnail"
                    className="video-thumbnail"
                  />
                  <div className="flex-row mt-05 mb-1 mx-05">
                    <img
                      src={video.channelThumbnail}
                      alt="channelThumbnail"
                      className="channel-thumbnail "
                    />
                    <div className="disp-flex flex-column ml-05">
                      <p className="video-name">{video.name}</p>
                      <div className="disp-flex mt-05">
                        <p className="channel-name">{video.channel}</p>
                        <p className="dot px-05">•</p>
                        <p className="video-views">{video.views} views</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoListingMobile;
