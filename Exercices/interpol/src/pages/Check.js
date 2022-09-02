import CheckForm from "../components/CheckForm/CheckForm";
import "./Check.css";
import CheckCard from "../components/CheckCard";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState, useEffect } from "react";
import { get_allAction } from "../components/redux/actions/creator";

const Check = () => {
  let dispatch = useDispatch();
  const { dataArray: persons, totalNum } = useSelector(
    (state) => state.persons
  );

  console.log(persons, " --> PERSONS");

  useEffect(() => {
    dispatch(get_allAction());
  }, []);

  const [checkFilter, setCheckFilter] = useState([]);
  const sendCheck = (searchArr) => {
    if (searchArr) {
      setCheckFilter(searchArr);
      console.log("from sendCheck", searchArr);
      return searchArr;
    }
  };
  console.log("check filter:", checkFilter);

  const getAges = (birthDate) => {
    let d = new Date();
    let y = d.getFullYear();
    let date = new Date(birthDate);
    let b = date.getFullYear();
    return y - b;
  };
  return (
    <>
      <div className="container">
        <div className="total">Total: {totalNum}</div>
        <div className="all">
          <div className="check">
            <CheckForm sendCheck={sendCheck} />
          </div>
          <div className="cards-list">
            {Array.isArray(persons)
              ? persons
                  .filter((val) => {
                    if (checkFilter.length === 0) {
                      return val;
                    } else if (
                      val?.name.toLowerCase() ===
                        checkFilter[0].toLowerCase() &&
                      (val?.forename.toLowerCase() ===
                        checkFilter[1].toLowerCase() ||
                        (val?.nationalities &&
                          val?.nationalities.indexOf(checkFilter[2]) !== -1) ||
                        getAges(val?.date_of_birth) <= checkFilter[4] ||
                        getAges(val?.date_of_birth) >= checkFilter[3] ||
                        val?.sex_id === checkFilter[5])
                    ) {
                      console.log("this is val --> ", val);
                      return val;
                    }
                    return null;
                  })
                  .map((obj, key) => {
                    console.log("OBJ --> ", obj);
                    return (
                      <CheckCard
                        key={key}
                        imgWanted={obj?._links?.thumbnail?.href}
                        forename={obj?.forename}
                        name={obj?.name}
                        birthDate={obj?.date_of_birth}
                        nationalities={obj?.nationalities}
                        urlDetails={obj?._links?.self?.href}
                      />
                    );
                  })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Check;
