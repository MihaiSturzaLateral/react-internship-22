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

const Home = () => {
  // const [wanted, setWanted] = useState();
  const [button, setButton] = useState("");

  let dispatch = useDispatch();

  const { dataArray: persons, totalNum } = useSelector(
    (state) => state.persons
  );
  console.log(persons);
  const sendData = (active) => {
    if (active) {
      setButton(active);

      console.log("From home js: ", active);

      return active;
    }
  };
  useEffect(() => {
    //console.log(persons);
    if (button === "all") dispatch(get_allAction(button));
    else dispatch(get_personsAction(button));
  }, [button]);

  // GET wanted fara Redux

  //   useEffect(() => {
  //     getAllWanted(`https://ws-public.interpol.int/notices/v1/${button}`);
  // }, [button]);
  //   const getAllWanted = (url) => {
  //     try {
  //       axios.get(`${url}`).then((res) => {
  //         let allWanted = res.data._embedded.notices;
  //         console.log("this is allWanted ", allWanted);
  //         setWanted(allWanted);
  //         return allWanted;
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

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
    </div>
  );
};

export default Home;
