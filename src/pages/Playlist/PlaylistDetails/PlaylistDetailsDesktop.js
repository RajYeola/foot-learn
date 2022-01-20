import { useNavigate, useParams } from "react-router";
import { useData } from "../../../context/dataContext";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { RiPencilFill, RiDeleteBin7Line, RiCheckFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  removePlaylist,
  removeVideoFromPlaylist,
  updatePlaylistName,
} from "../../../actions/index";
import { useState } from "react";

const PlaylistDetailsDesktop = () => {
  const { state, dispatch } = useData();
  const playlists = state?.playlists;
  const { playlistID } = useParams();
  const playlist = playlists.find(({ _id }) => _id === playlistID);
  const navigate = useNavigate();
  const { playlistName, videos } = playlist;
  const [inputPlaylistName, setInputPlaylistName] = useState(playlistName);
  const [input, setInput] = useState(false);

  return (
    <div className="view-container disp-flex">
      <Sidebar />
      <div className="playlist-details-container">
        <div className="disp-flex justify-between m-1">
          {input ? (
            <input
              type="text"
              value={inputPlaylistName}
              className="input-playlist"
              style={{
                fontSize: "1rem",
                padding: "0.25em",
              }}
              onChange={(e) => setInputPlaylistName(e.target.value)}
            />
          ) : (
            <h2>{playlistName}</h2>
          )}
          <div className="disp-flex justify-between">
            {input ? (
              <RiCheckFill
                className="cursor-pointer"
                style={{ fontSize: "1.5rem" }}
                onClick={() => {
                  setInput(false);
                  updatePlaylistName(playlist, inputPlaylistName, dispatch);
                }}
              />
            ) : (
              <RiPencilFill
                className="cursor-pointer"
                style={{ fontSize: "1.25rem" }}
                onClick={() => setInput(true)}
              />
            )}

            <RiDeleteBin7Line
              className="cursor-pointer ml-05"
              style={{ fontSize: "1.25rem", color: "var(--danger)" }}
              onClick={() => removePlaylist(playlist, dispatch, navigate)}
            />
          </div>
        </div>

        {videos?.map((video) => (
          <div className="playlist-video-container mb-1" key={video._id}>
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
                onClick={() =>
                  removeVideoFromPlaylist(playlist, video, dispatch)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetailsDesktop;
