import axios from "axios";

const url = "https://footlearn-backend.vercel.app";

export const signUp = (userInfo) => axios.post(`${url}/user/signup`, userInfo);
export const signIn = (userInfo) => axios.post(`${url}/user/signin`, userInfo);
export const fetchVideoData = () => axios.get(`${url}/videos`);
export const fetchLikedVideos = () => axios.get(`${url}/likedvideo`);
export const addVideoToLikedVideos = (video) =>
  axios.post(`${url}/likedvideo`, video);
export const removeVideoFromLikedVideos = (id) =>
  axios.delete(`${url}/likedvideo/${id}`);
export const fetchWatchLaterVideos = () => axios.get(`${url}/watchlater/`);
export const addVideoToWatchLater = (video) =>
  axios.post(`${url}/watchlater`, video);
export const removeVideoFromWatchLater = (id) =>
  axios.delete(`${url}/watchlater/${id}`);
export const fetchPlaylists = () => axios.get(`${url}/playlist`);
export const createNewPlaylistAndAddVideoToPlaylist = (playlistName, videoID) =>
  axios.post(`${url}/playlist`, { playlistName, videoID });
export const addVideoToPlaylist = (playlistID, videoID) =>
  axios.post(`${url}/playlist/${playlistID}/${videoID}`);
export const removeVideoFromPlaylist = (playlistID, videoID) =>
  axios.delete(`${url}/playlist/${playlistID}/${videoID}`);
export const removePlaylist = (playlistID) =>
  axios.delete(`${url}/playlist/${playlistID}`);
export const updatePlaylistName = (playlistID, playlistName) =>
  axios.post(`${url}/playlist/${playlistID}`, { playlistName });
export const fetchHistory = () => axios.get(`${url}/history/`);
export const addVideoToHistoryVideos = (videoID) =>
  axios.post(`${url}/history/`, { videoID });
export const clearHistory = () => axios.delete(`${url}/history/`);
export const removeVideoFromHistoryVideos = (videoID) =>
  axios.delete(`${url}/history/${videoID}`);
