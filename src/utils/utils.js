export const isInLikedVideos = (video, likedVideos) => {
  return likedVideos.some(({ id }) => id === video.id);
};

export const isInWatchLaterVideos = (video, watchLater) => {
  return watchLater.some(({ id }) => id === video.id);
};

export const isVideoAlreadyInHistory = (video, history) => {
  return history.some(({ id }) => id === video.id);
};

export const isVideoAlreadyInPlaylist = (video, playlist, playlists) => {
  const findPlaylist = playlists.find(
    ({ playlistName }) => playlistName === playlist.playlistName
  );

  return findPlaylist.videos.some(({ id }) => id === video.id);
};
