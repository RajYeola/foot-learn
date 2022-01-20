import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { MdPlaylistPlay } from "react-icons/md";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useParams } from "react-router";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useData } from "../../../context/dataContext";
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
import { useAuth } from "../../../context/authContext";
import { Link } from "react-router-dom";

const VideoDetailsDesktop = () => {
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
    const {
      name,
      channel,
      channelThumbnail,
      subscribers,
      videoDescription,
      views,
    } = video;

    return (
      <div className="view-container disp-flex width-100">
        <Sidebar />
        <div className="video-container">
          <div>
            <iframe
              width="775"
              height="400"
              src={`https://www.youtube.com/embed/${videoID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
            ></iframe>
          </div>

          <div className="pt-1">
            <p className="video-name pb-05">{name}</p>
            <div className="disp-flex align-center justify-between width-70 border-bottom-grey py-05">
              <p className="video-views pb-05">{views} views</p>
              <div className="disp-flex">
                {token ? (
                  <div className="pos-rel">
                    <MdPlaylistPlay
                      onClick={() => setPlaylistDisplay((prev) => !prev)}
                      className="action-icon mx-05 cursor-pointer"
                      style={{ color: "var(--black-1)" }}
                    />
                    <div
                      style={{
                        display: playlistDisplay ? "block" : "none",
                      }}
                      className="playlist-container p-1"
                    >
                      {playlists &&
                        playlists?.map((playlist, index) =>
                          isVideoAlreadyInPlaylist(
                            video,
                            playlist,
                            playlists
                          ) ? (
                            <button
                              className="btn-playlist disp-flex align-center pb-05"
                              key={index}
                              onClick={() =>
                                removeVideoFromPlaylist(
                                  playlist,
                                  video,
                                  dispatch
                                )
                              }
                            >
                              <FiMinusCircle
                                className="mr-05"
                                style={{ fontSize: "1.25rem" }}
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
                                style={{ fontSize: "1.25rem" }}
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
                            style={{ fontSize: "1.25rem" }}
                          />
                          <span style={{ whiteSpace: "nowrap" }}>
                            Add new Playlist
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <Link to="/login">
                    <MdPlaylistPlay
                      style={{ color: "var(--black-1)" }}
                      className="action-icon mx-05 cursor-pointer"
                    />
                  </Link>
                )}

                {watchLater && isInWatchLaterVideos(video, watchLater) ? (
                  <WatchLaterIcon
                    onClick={() => removeVideoFromWatchLater(video, dispatch)}
                    className="action-icon mx-05 cursor-pointer"
                  />
                ) : (
                  <WatchLaterOutlinedIcon
                    onClick={() => addVideoToWatchLater(video, dispatch)}
                    className="action-icon mx-05 cursor-pointer"
                  />
                )}

                {likedVideos && isInLikedVideos(video, likedVideos) ? (
                  <AiFillLike
                    onClick={() => removeVideoFromLikedVideos(video, dispatch)}
                    className="action-icon mx-05 cursor-pointer"
                  />
                ) : (
                  <AiOutlineLike
                    onClick={() => addVideoToLikedVideos(video, dispatch)}
                    className="action-icon mx-05 cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="disp-flex align-center py-05">
              <img
                src={channelThumbnail}
                alt="channelThumbnail"
                className="channel-thumbnail"
              />
              <div className="ml-1">
                <p className="channel-name ">{channel}</p>
                <p className="channel-subscribers pt-05">
                  {subscribers} subscribers
                </p>
              </div>
            </div>
            <p className="video-description pt-1">{videoDescription}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="view-container disp-flex width-100">
        <Sidebar />
      </div>
    );
  }
};

export default VideoDetailsDesktop;
