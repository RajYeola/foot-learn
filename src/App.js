import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import MediaQuery from "react-responsive";
import Home from "./pages/Home";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import PrivateRoute from "./utils/PrivateRoute";

const PlaylistListing = lazy(() =>
  import("./pages/Playlist/PlaylistListing/PlaylistListing")
);
const PlaylistDetails = lazy(() =>
  import("./pages/Playlist/PlaylistDetails/PlaylistDetails")
);
const History = lazy(() => import("./pages/History/History"));
const LikedVideos = lazy(() => import("./pages/LikedVideos/LikedVideos"));
const WatchLater = lazy(() => import("./pages/WatchLater/WatchLater"));
const Account = lazy(() => import("./pages/Account/Account"));
const Login = lazy(() => import("./pages/Auth/Login/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup/Signup"));
const VideoDetails = lazy(() =>
  import("./pages/Video/VideoDetails/VideoDetails")
);

function App() {
  return (
    <div className="App">
      <NavbarDesktop />
      <MediaQuery maxWidth={768}>
        <NavbarMobile />
      </MediaQuery>

      <Suspense
        fallback={
          <div className="view-container pt-10 disp-flex justify-center align-center">
            <FaSpinner className="spin fs-spinner" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:videoID" element={<VideoDetails />} />
          <PrivateRoute path="/playlists" element={<PlaylistListing />} />
          <PrivateRoute
            path="/playlists/:playlistID"
            element={<PlaylistDetails />}
          />
          <PrivateRoute path="/history" element={<History />} />
          <PrivateRoute path="/likedvideos" element={<LikedVideos />} />
          <PrivateRoute path="/watchlater" element={<WatchLater />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
