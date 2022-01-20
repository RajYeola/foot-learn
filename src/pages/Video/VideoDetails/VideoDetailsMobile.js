import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { MdPlaylistPlay } from "react-icons/md";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useParams } from "react-router";
import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../context/authContext";
import {
  isInLikedVideos,
  isInWatchLaterVideos,
  isVideoAlreadyInPlaylist,
} from "../../../utils/utils";
import {
  addVideoToLikedVideos,
  addVideoToPlaylist,
  addVideoToWatchLater,
  createPlaylistAndAddVideoToPlaylist,
  removeVideoFromLikedVideos,
  removeVideoFromPlaylist,
  removeVideoFromWatchLater,
} from "../../../actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const VideoDetailsMobile = () => {
  const { videoID } = useParams();
  const { state, dispatch, videoData } = useData();
  const likedVideos = state?.likedVideos;
  const watchLater = state?.watchLater;
  const playlists = state?.playlists;
  const [playlistDisplay, setPlaylistDisplay] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const { token } = useAuth();

  const getVideoDetails = (videoID, videoData) => {
    return videoData.find(({ id }) => id === videoID);
  };

  const video = getVideoDetails(videoID, videoData);

  if (video) {
    const { name, channel, channelThumbnail, subscribers, views } = video;

    return (
      <div className="view-container">
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
        <div className="video-mobile-container">
          <p className="video-name pt-05 px-05">{name}</p>
          <p className="video-views py-05 border-bottom-grey px-05">
            {views} views
          </p>
          <div className="disp-flex justify-between py-05 width-75">
            <div className="disp-flex flex-column align-center">
              {token ? (
                likedVideos && isInLikedVideos(video, likedVideos) ? (
                  <AiFillLike
                    onClick={() => removeVideoFromLikedVideos(video, dispatch)}
                    className="action-icon"
                  />
                ) : (
                  <AiOutlineLike
                    onClick={() => addVideoToLikedVideos(video, dispatch)}
                    className="action-icon"
                  />
                )
              ) : (
                <Link to="/login">
                  {" "}
                  <AiOutlineLike
                    style={{ color: "var(--black-1)" }}
                    className="action-icon"
                  />
                </Link>
              )}
              <p>Like</p>
            </div>
            <div className="disp-flex flex-column align-center">
              {token ? (
                watchLater && isInWatchLaterVideos(video, watchLater) ? (
                  <WatchLaterIcon
                    onClick={() => removeVideoFromWatchLater(video, dispatch)}
                    className="action-icon"
                  />
                ) : (
                  <WatchLaterOutlinedIcon
                    onClick={() => addVideoToWatchLater(video, dispatch)}
                    className="action-icon"
                  />
                )
              ) : (
                <Link to="/login">
                  <WatchLaterOutlinedIcon
                    style={{ color: "var(--black-1)" }}
                    className="action-icon"
                  />
                </Link>
              )}
              <p>Watch Later</p>
            </div>
            {token ? (
              <div className="disp-flex flex-column align-center pos-rel">
                <MdPlaylistPlay
                  className="action-icon"
                  onClick={() => setPlaylistDisplay((prev) => !prev)}
                />
                <p>Save</p>
                <div
                  style={{
                    display: playlistDisplay ? "block" : "none",
                  }}
                  className="playlist-container p-1"
                >
                  {playlists &&
                    playlists?.map((playlist, index) =>
                      isVideoAlreadyInPlaylist(video, playlist, playlists) ? (
                        <button
                          className="btn-playlist disp-flex align-center pb-05"
                          key={index}
                          onClick={() =>
                            removeVideoFromPlaylist(playlist, video, dispatch)
                          }
                        >
                          <FiMinusCircle
                            className="mr-05"
                            style={{ fontSize: "1.1rem" }}
                          />
                          <span>{playlist.playlistName}</span>
                        </button>
                      ) : (
                        <button
                          className="btn-playlist disp-flex align-center pb-05"
                          key={index}
                          onClick={() =>
                            addVideoToPlaylist(playlist, video, dispatch)
                          }
                        >
                          <FiPlusCircle
                            className="mr-05"
                            style={{ fontSize: "1.1rem" }}
                          />
                          <span>{playlist.playlistName}</span>
                        </button>
                      )
                    )}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setPlaylistName("");
                      playlistName &&
                        createPlaylistAndAddVideoToPlaylist(
                          video,
                          playlistName,
                          dispatch
                        );
                    }}
                  >
                    <input
                      type="text"
                      className="input-basic width-100 mb-05"
                      placeholder="Playlist name"
                      value={playlistName}
                      onChange={(e) => setPlaylistName(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="btn-playlist disp-flex align-center "
                    >
                      <FiPlusCircle
                        className="mr-05"
                        style={{ fontSize: "1.1rem" }}
                      />
                      <span style={{ whiteSpace: "nowrap" }}>
                        Add new Playlist
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="disp-flex flex-column align-center"
                style={{ color: "var(--black-1)" }}
              >
                <MdPlaylistPlay
                  className="action-icon"
                  onClick={() => setPlaylistDisplay((prev) => !prev)}
                />
                <p>Save</p>
              </Link>
            )}
          </div>
          <div className="disp-flex align-center border-top-grey p-05">
            <img
              src={channelThumbnail}
              alt="channelThumbnail"
              className="channel-thumbnail"
            />
            <div className="pl-05">
              <p className="channel-name">{channel}</p>
              <p className="channel-subscribers">{subscribers} subscribers</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="view-container"></div>;
  }
};

export default VideoDetailsMobile;
