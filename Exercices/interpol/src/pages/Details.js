import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import DetailsList from "../components/DetailsList";

const Details = () => {
  const location = useLocation();
  return (
    <div>
      <div style={{ marginTop: "2em", marginLeft: "2em", fontSize: "1.25em" }}>
        <BackButton />
      </div>
      <DetailsList urlDetails={location.state.urlDetails} />
    </div>
  );
};

export default Details;
