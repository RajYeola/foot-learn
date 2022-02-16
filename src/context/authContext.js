import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { signIn, signUp } from "../api";
import setupAuthHeaderForServiceCalls from "../utils/setupAuthHeaderForServiceCalls";
import {
  invalidCredentialsSignupToast,
  invalidCredentialsToast,
} from "../utils/toasts";

const AuthContext = createContext();

export default function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(localStorage.getItem("token"));

    if (isUserLoggedIn) {
      setIsLoggedIn(true);
      setupAuthHeaderForServiceCalls(isUserLoggedIn.token);
      setToken(isUserLoggedIn.token);
    }
  }, []);

  const signup = async (userInfo) => {
    try {
      const {
        data: { token },
      } = await signUp(userInfo);

      state === null ? navigate("/") : navigate(state?.from ? state.from : "/");
      setIsLoggedIn(true);
      setToken(token);
      setupAuthHeaderForServiceCalls(token);
      localStorage.setItem("token", JSON.stringify({ token }));
    } catch (error) {
      console.error(error.message);
      invalidCredentialsSignupToast();
    }
  };

  const signin = async (userInfo) => {
    try {
      const {
        data: { token },
      } = await signIn(userInfo);

      state === null ? navigate("/") : navigate(state?.from ? state.from : "/");
      setIsLoggedIn(true);
      setToken(token);
      setupAuthHeaderForServiceCalls(token);
      localStorage.setItem("token", JSON.stringify({ token }));
    } catch (error) {
      console.error(error.message);
      invalidCredentialsToast();
    }
  };

  const signout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setupAuthHeaderForServiceCalls(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, signin, signup, signout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}