export const initialState = {
  likedVideos: [],
  watchLater: [],
  playlists: [],
  history: [],
};

export const dataReducer = (state, action) => {
  const { likedVideos, watchLater, playlists, history } = state;

  switch (action.type) {
    case "INITIALIZE_WATCH_LATER":
      if (action.payload) {
        return { ...state, watchLater: action.payload };
      } else {
        return { ...state, watchLater: [] };
      }

    case "INITIALIZE_LIKED_VIDEOS":
      if (action.payload) {
        return { ...state, likedVideos: action.payload };
      } else {
        return { ...state, likedVideos: [] };
      }

    case "INITIALIZE_HISTORY":
      if (action.payload) {
        return { ...state, history: action.payload };
      } else {
        return { ...state, history: [] };
      }

    case "INITIALIZE_PLAYLISTS":
      if (action.payload) {
        return { ...state, playlists: action.payload };
      } else {
        return { ...state, playlists: [] };
      }

    case "LIKE_VIDEO":
      const isAlreadyInLikedVideos = likedVideos.some(
        (video) => video.id === action.payload.id
      );

      if (isAlreadyInLikedVideos) {
        return { ...state };
      }
      return { ...state, likedVideos: [...likedVideos.concat(action.payload)] };

    case "REMOVE_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: likedVideos.filter(
          (video) => video.id !== action.payload.id
        ),
      };

    case "WATCH_LATER":
      const isAlreadyInWatchLater = watchLater.some(
        ({ id }) => id === action.payload.id
      );

      if (isAlreadyInWatchLater) {
        return { ...state };
      }
      return { ...state, watchLater: [...watchLater.concat(action.payload)] };

    case "REMOVE_WATCH_LATER":
      return {
        ...state,
        watchLater: watchLater.filter(({ id }) => id !== action.payload.id),
      };

    case "CREATE_PLAYLIST":
      if (action.payload.playlistName.length > 0) {
        return {
          ...state,
          playlists: [
            ...playlists.concat({
              playlistName: action.payload.playlistName,
              videos: [action.payload.video],
              _id: action.payload.playlistID,
            }),
          ],
        };
      } else {
        return { ...state };
      }

    case "ADD_TO_PLAYLIST":
      const findPlaylist = playlists.find(
        (playlist) => playlist._id === action.payload.playlist._id
      );

      const isVideoAlreadyInPlaylist = findPlaylist.videos.some(
        (video) => video._id === action.payload.video._id
      );

      if (isVideoAlreadyInPlaylist) {
        return { ...state };
      } else {
        return {
          ...state,
          playlists: [
            ...playlists?.map((playlist) =>
              playlist._id === action.payload.playlist._id
                ? {
                    ...playlist,
                    videos: [...playlist.videos, action.payload.video],
                  }
                : { ...playlist }
            ),
          ],
        };
      }

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: [
          ...playlists?.map((playlist) =>
            playlist._id === action.payload.playlist._id
              ? {
                  ...playlist,
                  videos: playlist.videos.filter(
                    ({ id }) => id !== action.payload.video.id
                  ),
                }
              : { ...playlist }
          ),
        ],
      };

    case "REMOVE_PLAYLIST":
      if (playlists) {
        return {
          ...state,
          playlists: playlists.filter(
            (playlist) => playlist._id !== action.payload
          ),
        };
      } else {
        return { ...state };
      }

    case "UPDATE_PLAYLIST_NAME":
      return {
        ...state,
        playlists: [
          ...playlists?.map((playlist) =>
            playlist._id === action.payload.playlist._id
              ? { ...playlist, playlistName: action.payload.inputPlaylistName }
              : { ...playlist }
          ),
        ],
      };

    case "ADD_TO_HISTORY":
      return { ...state, history: [...history.concat(action.payload)] };

    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: history.filter(({ id }) => id !== action.payload),
      };

    case "CLEAR_HISTORY":
      return {
        ...state,
        history: [],
      };
    default:
      return { ...state };
  }
};
