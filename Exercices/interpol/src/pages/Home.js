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
  const { persons } = useSelector((state) => state);

  const sendData = (active) => {
    if (active) {
      setButton(active);

      console.log("From home js: ", active);

      return active;
    }
  };
  useEffect(() => {
    if (button === 'all') dispatch(get_allAction(button));
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
    <div>
      <ButtonsGroup sendData={sendData} />
      <div className="mare">
        <div className="cards-list">
          <div className="card">
            {Array.isArray(persons)
              ? persons.map((obj, key) => (
                  <Cards
                    key={key}
                    imgWanted={obj._links.thumbnail.href}
                    forenameWanted={obj.forename}
                    nameWanted={obj.name}
                    birthWanted={obj.date_of_birth}
                    natWanted={obj.nationalities}
                    danger={button}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
