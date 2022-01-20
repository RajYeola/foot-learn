import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";

const LoginMobile = () => {
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
    <div className="pos-rel">
      <div className="view-container pt-7 disp-flex flex-column align-center">
        {isLoggedIn ? (
          <h2>You are Signed in</h2>
        ) : (
          <div className="account-actions-container disp-flex flex-column width-100 align-center">
            <h2 className="my-05 color-primary">Sign In</h2>

            <input
              type="email"
              name="email"
              className="input-basic my-05 input-email"
              placeholder="Email"
              onChange={handleUserInfoData}
              style={{ fontSize: "0.875rem" }}
            />
            <div className="disp-flex flex-column input-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input-basic my-05 width-100"
                placeholder="Password"
                onChange={handleUserInfoData}
                style={{ fontSize: "0.875rem" }}
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
          style={{ fontSize: "0.875rem", letterSpacing: "0.0625rem" }}
        >
          {isLoggedIn ? "SIGN OUT" : "SIGN IN"}
        </button>

        {!isLoggedIn && (
          <button
            className="btn text-uppercase my-05"
            onClick={() => navigate("/signup")}
            style={{ fontSize: "0.75rem", letterSpacing: "0.0625rem" }}
          >
            Don't have an account? Sign Up
          </button>
        )}
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default LoginMobile;
