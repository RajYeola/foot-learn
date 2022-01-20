import { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";
import {
  invalidEmailToast,
  invalidNameToast,
  invalidPasswordToast,
} from "../../../utils/toasts";

const SignupDesktop = () => {
  const { signup } = useAuth();
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

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const nameTest = nameRegex.test(userInfo.name);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailTest = emailRegex.test(userInfo.email);

  const passwordRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}/;
  const passwordTest = passwordRegex.test(userInfo.password);

  return (
    <div className="view-container disp-flex">
      <Sidebar />
      <div className="pos-rel login-container">
        <div className="pt-3 disp-flex flex-column align-center">
          <div className="account-actions-container disp-flex flex-column width-100 align-center">
            <h1 className="my-05 color-primary">Sign Up</h1>

            <input
              type="text"
              name="name"
              className={`input-basic my-05 input-name ${
                nameTest ? "" : "border-danger"
              }`}
              placeholder="Name"
              onChange={handleUserInfoData}
            />
            <input
              type="email"
              name="email"
              className={`input-basic my-05 input-email ${
                emailTest ? "" : "border-danger"
              }`}
              placeholder="Email"
              onChange={handleUserInfoData}
            />
            <div className="disp-flex flex-column input-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`input-basic my-05 width-100 ${
                  passwordTest ? "" : "border-danger"
                }`}
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

          <button
            className={`btn my-05 btn-login btn-success`}
            onClick={() => {
              if (!nameTest) {
                invalidNameToast();
              } else if (!emailTest) {
                invalidEmailToast();
              } else if (!passwordTest) {
                invalidPasswordToast();
              } else {
                signup(userInfo);
              }
            }}
          >
            SIGN UP
          </button>

          <button
            className="btn text-uppercase my-05"
            onClick={() => navigate("/login")}
          >
            Already have an account? Sign In
          </button>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default SignupDesktop;
