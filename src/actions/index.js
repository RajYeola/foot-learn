import * as api from "../api/index";

export const fetchVideoData = async () => {
  try {
    return await api.fetchVideoData();
  } catch (error) {
    console.error("Error getting user data", error.message);
  }
};

export const fetchLikedVideos = async () => {
  try {
    const {
      data: {
        likedVideos: { videos },
      },
    } = await api.fetchLikedVideos();
    return videos;
  } catch (error) {
    console.error(error.message);
  }
};

export const addVideoToLikedVideos = async (video, dispatch) => {
  try {
    const response = await api.addVideoToLikedVideos(video);

    if (response.status === 200) {
      dispatch({ type: "LIKE_VIDEO", payload: video });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeVideoFromLikedVideos = async (video, dispatch) => {
  try {
    const response = await api.removeVideoFromLikedVideos(video._id);

    if (response.status === 200) {
      dispatch({ type: "REMOVE_LIKED_VIDEO", payload: video });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchWatchLaterVideos = async () => {
  try {
    const {
      data: {
        watchLaterVideos: { videos },
      },
    } = await api.fetchWatchLaterVideos();
    return videos;
  } catch (error) {
    console.error(error.message);
  }
};

export const addVideoToWatchLater = async (video, dispatch) => {
  try {
    const response = await api.addVideoToWatchLater(video);

    if (response.status === 200) {
      dispatch({ type: "WATCH_LATER", payload: video });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeVideoFromWatchLater = async (video, dispatch) => {
  try {
    const response = await api.removeVideoFromWatchLater(video._id);

    if (response.status === 200) {
      dispatch({ type: "REMOVE_WATCH_LATER", payload: video });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchPlaylists = async () => {
  try {
    const {
      data: {
        playlists: { playlists: userPlaylist },
      },
    } = await api.fetchPlaylists();

    return userPlaylist;
  } catch (error) {
    console.error(error.message);
  }
};

export const createPlaylistAndAddVideoToPlaylist = async (
  video,
  playlistName,
  dispatch
) => {
  try {
    const response = await api.createNewPlaylistAndAddVideoToPlaylist(
      playlistName,
      video._id
    );
    const playlistID = response.data.newPlaylist._id;

    if (response.status === 200) {
      dispatch({
        type: "CREATE_PLAYLIST",
        payload: { video, playlistName, playlistID },
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const addVideoToPlaylist = async (playlist, video, dispatch) => {
  try {
    const response = await api.addVideoToPlaylist(playlist._id, video._id);

    if (response.status === 200) {
      dispatch({
        type: "ADD_TO_PLAYLIST",
        payload: { video, playlist },
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeVideoFromPlaylist = async (playlist, video, dispatch) => {
  try {
    const response = await api.removeVideoFromPlaylist(playlist._id, video._id);

    if (response.status === 200) {
      dispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: { video, playlist },
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removePlaylist = async (playlist, dispatch, navigate) => {
  try {
    const response = await api.removePlaylist(playlist._id);

    if (response.status === 200) {
      navigate("/playlists");
      dispatch({ type: "REMOVE_PLAYLIST", payload: playlist._id });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePlaylistName = async (
  playlist,
  inputPlaylistName,
  dispatch
) => {
  try {
    const response = await api.updatePlaylistName(
      playlist._id,
      inputPlaylistName
    );

    if (response.status === 200) {
      dispatch({
        type: "UPDATE_PLAYLIST_NAME",
        payload: { inputPlaylistName, playlist },
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchHistory = async () => {
  try {
    const {
      data: {
        historyVideos: { videos },
      },
    } = await api.fetchHistory();

    return videos;
  } catch (error) {
    console.error(error.message);
  }
};

export const addVideoToHistoryVideos = async (video, dispatch) => {
  try {
    const response = await api.addVideoToHistoryVideos(video._id);

    if (response.status === 200) {
      dispatch({ type: "ADD_TO_HISTORY", payload: video });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeVideoFromHistoryVideos = async (video, dispatch) => {
  try {
    const response = await api.removeVideoFromHistoryVideos(video._id);

    if (response.status === 200) {
      dispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: video.id,
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const clearHistory = async (dispatch) => {
  try {
    const response = api.clearHistory();

    if ((await response).status === 200) {
      dispatch({ type: "CLEAR_HISTORY" });
    }
  } catch (error) {
    console.error(error.message);
  }
};
