import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  fetchHistory,
  fetchLikedVideos,
  fetchPlaylists,
  fetchVideoData,
  fetchWatchLaterVideos,
} from "../actions/index";
import { dataReducer, initialState } from "../reducer/dataReducer";
import { useAuth } from "./authContext";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [videoData, setVideoData] = useState([]);
  const { token } = useAuth();

  useEffect(
    () =>
      (async () => {
        const {
          data: { videos },
        } = await fetchVideoData();
        setVideoData(videos);

        if (token) {
          const watchLaterVideos = await fetchWatchLaterVideos();
          dispatch({
            type: "INITIALIZE_WATCH_LATER",
            payload: watchLaterVideos,
          });

          const likedVideos = await fetchLikedVideos();
          dispatch({ type: "INITIALIZE_LIKED_VIDEOS", payload: likedVideos });

          const history = await fetchHistory();
          dispatch({ type: "INITIALIZE_HISTORY", payload: history });

          const playlists = await fetchPlaylists();
          dispatch({ type: "INITIALIZE_PLAYLISTS", payload: playlists });
        }
      })(),
    [token]
  );

  return (
    <DataContext.Provider value={{ state, dispatch, videoData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
