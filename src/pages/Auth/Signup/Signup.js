import { useEffect } from "react";
import MediaQuery from "react-responsive";
import SignupDesktop from "./SignupDesktop";
import SignupMobile from "./SignupMobile";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/authContext";

const Signup = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    token && navigate("/");
  }, [token, navigate]);

  return (
    <div>
      <MediaQuery maxWidth={768}>
        <SignupMobile />
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <SignupDesktop />
      </MediaQuery>
    </div>
  );
};

export default Signup;
