import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { removeVideoFromLikedVideos } from "../../actions";
import { useData } from "../../context/dataContext";

const LikedVideosMobile = () => {
  const { state, dispatch } = useData();
  const likedVideos = state?.likedVideos;

  return (
    <div className="view-container">
      <h3 className="p-05">Liked Videos</h3>

      {likedVideos?.map((video) => (
        <div
          key={video._id}
          style={{ display: "grid", gridTemplateColumns: "85% 15%" }}
          className="liked-videos-video-container mb-05"
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
              onClick={() => removeVideoFromLikedVideos(video, dispatch)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedVideosMobile;
