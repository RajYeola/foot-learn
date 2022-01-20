import MediaQuery from "react-responsive";
import LoginDesktop from "./LoginDesktop";
import LoginMobile from "./LoginMobile";

export default function Login() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <LoginDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <LoginMobile />
      </MediaQuery>
    </div>
  );
}
