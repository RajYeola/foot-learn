import "../Video.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useData } from "../../../context/dataContext";
import { isVideoAlreadyInHistory } from "../../../utils/utils";
import { addVideoToHistoryVideos } from "../../../actions";

const VideoListingDesktop = () => {
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
    <div className="disp-flex width-100">
      <Sidebar />
      <div className="video-listing-container">
        <div className="mt-1">
          <button
            onClick={() => setCurrentGenre("All")}
            className={`genre-btn ml-1 mr-05 ${
              currentGenre === "All" ? "selected" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCurrentGenre("Dribbling")}
            className={`genre-btn mx-05 ${
              currentGenre === "Dribbling" ? "selected" : ""
            }`}
          >
            Dribbling
          </button>
          <button
            onClick={() => setCurrentGenre("Juggling/Freestyle")}
            className={`genre-btn mx-05 ${
              currentGenre === "Juggling/Freestyle" ? "selected" : ""
            }`}
          >
            Juggling/Freestyle
          </button>
          <button
            onClick={() => setCurrentGenre("Free Kicks")}
            className={`genre-btn mx-05 ${
              currentGenre === "Free Kicks" ? "selected" : ""
            }`}
          >
            Free Kicks
          </button>
          <button
            onClick={() => setCurrentGenre("GoalKeeping")}
            className={`genre-btn mx-05 ${
              currentGenre === "GoalKeeping" ? "selected" : ""
            }`}
          >
            Goalkeeping
          </button>
          <button
            onClick={() => setCurrentGenre("Passing")}
            className={`genre-btn mx-05 ${
              currentGenre === "Passing" ? "selected" : ""
            }`}
          >
            Passing
          </button>
          <button
            onClick={() => setCurrentGenre("Shooting")}
            className={`genre-btn mx-05 ${
              currentGenre === "Shooting" ? "selected" : ""
            }`}
          >
            Shooting
          </button>
          <button
            onClick={() => setCurrentGenre("Tackling")}
            className={`genre-btn mx-05 ${
              currentGenre === "Tackling" ? "selected" : ""
            }`}
          >
            Tackling
          </button>
        </div>
        <div className="disp-flex">
          {filteredData &&
            filteredData?.map((video) => (
              <div key={video.id} className="m-1">
                <Link
                  to={`/${video.id}`}
                  onClick={() => {
                    !isVideoAlreadyInHistory(video, history) &&
                      addVideoToHistoryVideos(video, dispatch);
                  }}
                >
                  <div className="video-card disp-flex flex-column">
                    <img
                      src={video.videoThumbnail}
                      alt="videoThumbnail"
                      className="video-thumbnail"
                    />
                    <div className="flex-row mt-05">
                      <img
                        src={video.channelThumbnail}
                        alt="channelThumbnail"
                        className="channel-thumbnail"
                      />

                      <div className="disp-flex flex-column ml-05">
                        <p className="video-name">{video.name}</p>
                        <div className="mt-05 disp-flex">
                          <p className="channel-name">{video.channel}</p>
                          <p
                            className="dot px-05"
                            style={{
                              fontSize: "0.75rem",
                              marginTop: "0.15em",
                            }}
                          >
                            •
                          </p>
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
    </div>
  );
};

export default VideoListingDesktop;
