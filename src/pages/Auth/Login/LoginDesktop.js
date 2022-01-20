import { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";

const LoginDesktop = () => {
  const { isLoggedIn, signin, signout } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleUserInfoData = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="view-container disp-flex">
      <Sidebar />
      <div className="pos-rel login-container">
        <div className="pt-3 disp-flex flex-column align-center">
          {isLoggedIn ? (
            <h1>You are Signed in</h1>
          ) : (
            <div className="account-actions-container disp-flex flex-column width-100 align-center">
              <h1 className="my-05 color-primary">Sign In</h1>
              <input
                type="email"
                name="email"
                className="input-basic my-05 input-email"
                placeholder="Email"
                onChange={handleUserInfoData}
              />
              <div className="disp-flex flex-column input-password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input-basic my-05 width-100"
                  placeholder="Password"
                  onChange={handleUserInfoData}
                />
                <label className="mt-05">
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword((prev) => !prev)}
                  />
                  <span className="pl-05">Show Password</span>
                </label>
              </div>
            </div>
          )}

          <button
            className={`btn my-05 btn-login ${
              isLoggedIn ? `btn-danger` : `btn-success`
            }`}
            onClick={() => {
              if (isLoggedIn) {
                signout();
              } else {
                signin(userInfo);
              }
            }}
          >
            {isLoggedIn ? "SIGN OUT" : "SIGN IN"}
          </button>

          {!isLoggedIn && (
            <button
              className="btn text-uppercase my-05"
              onClick={() => navigate("/signup")}
            >
              Don't have an account? Sign Up
            </button>
          )}
        </div>
      </div>{" "}
      <Toaster position="top-right" />
    </div>
  );
};

export default LoginDesktop;
