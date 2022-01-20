import { useNavigate, useParams } from "react-router";
import { useData } from "../../../context/dataContext";
import { RiPencilFill, RiDeleteBin7Line, RiCheckFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  removePlaylist,
  removeVideoFromPlaylist,
  updatePlaylistName,
} from "../../../actions/index";
import { useState } from "react";

const PlaylistDetailsMobile = () => {
  const { state, dispatch } = useData();
  const playlists = state?.playlists;
  const { playlistID } = useParams();
  const playlist = playlists.find(({ _id }) => _id === playlistID);
  const navigate = useNavigate();
  const { playlistName, videos } = playlist;
  const [inputPlaylistName, setInputPlaylistName] = useState(playlistName);
  const [input, setInput] = useState(false);

  return (
    <div className="view-container">
      <div className="disp-flex justify-between p-05">
        {input ? (
          <input
            type="text"
            value={inputPlaylistName}
            className="input-playlist"
            onChange={(e) => setInputPlaylistName(e.target.value)}
          />
        ) : (
          <h3>{playlistName}</h3>
        )}
        <div>
          {input ? (
            <RiCheckFill
              style={{ fontSize: "1.25rem" }}
              onClick={() => {
                setInput(false);
                updatePlaylistName(playlist, inputPlaylistName, dispatch);
              }}
            />
          ) : (
            <RiPencilFill
              style={{ fontSize: "1.25rem" }}
              onClick={() => setInput(true)}
            />
          )}
          <RiDeleteBin7Line
            className="ml-05"
            style={{ fontSize: "1.1rem", color: "var(--danger)" }}
            onClick={() => removePlaylist(playlist, dispatch, navigate)}
          />
        </div>
      </div>

      {videos?.map((video) => (
        <div
          key={video._id}
          style={{ display: "grid", gridTemplateColumns: "85% 15%" }}
          className="playlist-video-container mb-05"
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
              onClick={() => removeVideoFromPlaylist(playlist, video, dispatch)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistDetailsMobile;
