import "./History.css";
import MediaQuery from "react-responsive";
import HistoryDesktop from "./HistoryDesktop";
import HistoryMobile from "./HistoryMobile";

const History = () => {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <HistoryDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <HistoryMobile />
      </MediaQuery>
    </div>
  );
};

export default History;
