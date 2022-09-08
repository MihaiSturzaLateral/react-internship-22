import ButtonsGroup from "../components/ButtonsGroup";
import Cards from "../components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  get_allAction,
  get_personsAction,
} from "../components/redux/actions/creator";
import Pagination from "../components/Pagination";

const Home = () => {
  const [button, setButton] = useState("");

  const [currentPage, setCurentPage] = useState(1);

  let dispatch = useDispatch();

  const { dataArray: persons, totalNum } = useSelector(
    (state) => state.persons
  );

  const sendData = (active) => {
    if (active) {
      setButton(active);

      return active;
    }
  };

  const paginate = (pageNumber) => {
    setCurentPage(pageNumber);
  };

  useEffect(() => {
    if (button === "all") dispatch(get_allAction(button, currentPage));
    else dispatch(get_personsAction(button, currentPage));
  }, [button, currentPage]);

  return (
    <div className="container">
      <ButtonsGroup sendData={sendData} />
      <label className="total">Total: {totalNum}</label>
      <div className="all-cards">
        <div className="row row-cols-1  row-cols-md-3">
          {Array.isArray(persons)
            ? persons.map((obj, key) => (
                <Cards
                  className="col mb-4"
                  key={key}
                  imgWanted={obj?._links?.thumbnail?.href}
                  forenameWanted={obj?.forename}
                  nameWanted={obj?.name}
                  birthWanted={obj?.date_of_birth}
                  natWanted={obj?.nationalities}
                  danger={button}
                  urlDetails={obj?._links?.self?.href}
                />
              ))
            : null}
        </div>
      </div>
      <div className="pag">
        <Pagination paginate={paginate} />
      </div>
    </div>
  );
};

export default Home;
