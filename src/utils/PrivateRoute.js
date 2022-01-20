import { Navigate, Route } from "react-router";
import { useAuth } from "../context/authContext";

export default function PrivateRoute({ path, ...props }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
