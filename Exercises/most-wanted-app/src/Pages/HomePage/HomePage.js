import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/features/dataSlice";
import { getYellowData } from "../../redux/features/dataYellowSlice";
import Button from "react-bootstrap/Button";
import "./HomePage.css";
import Cards from "../../Components/Cards";
import Badge from "react-bootstrap/Badge";


const HomePage = () => {
  const dispatch = useDispatch();
  const { dataList } = useSelector((state) => state.data);
  const { dataYellowList } = useSelector((state) => state.dataYellow);
  let [all, setAll] = useState(true);
  let [red, setRed] = useState(false);
  let [yellow, setYellow] = useState(false);

  useEffect(() => {
    dispatch(getData());
    dispatch(getYellowData());
  }, []);

  return (
    <>
      <div className="buttons">
        <Button
          variant="danger"
          onClick={() => {
            setAll(false);
            setRed(true);
            setYellow(false);
          }}
        >
          Red Notices
        </Button>
        <Button
          variant="warning"
          style={{ color: "white", marginLeft: "20px" }}
          onClick={() => {
            setAll(false);
            setRed(false);
            setYellow(true);
          }}
        >
          Yellow Notices
        </Button>
        <Button
          variant="dark"
          style={{ marginLeft: "20px" }}
          onClick={() => {
            setAll(true);
            setRed(false);
            setYellow(false);
          }}
        >
          All Notices
        </Button>
        
        <Badge className="wantedBadge" pill bg="light" text="dark">
          Total Wanted:{" "}
          {all
            ? dataList?.total + dataYellowList?.total
            : red
            ? dataList.total
            : dataYellowList.total}
        </Badge>
        
      </div>
      <div className='divCard'>
        {all &&
          dataList?._embedded?.notices?.map((item, index) => {
            const yellowNotice = dataYellowList?._embedded?.notices[index];
            return (
              <>
                <Cards
                  key={index}
                  fname={item?.forename}
                  lname={item?.name}
                  dateOfBirth={item?.date_of_birth}
                  nationalities={item?.nationalities}
                  imag={item?._links?.thumbnail?.href}
                  badgeColor={"danger"}
                  linkDetails={item?._links?.self?.href}
                  linkImages={item?._links?.images?.href}
                />

                <Cards
                  key={yellowNotice?.entity_id}
                  fname={yellowNotice?.forename}
                  lname={yellowNotice?.name}
                  dateOfBirth={yellowNotice?.date_of_birth}
                  nationalities={yellowNotice?.nationalities}
                  imag={yellowNotice?._links?.thumbnail?.href}
                  badgeColor={"warning"}
                  linkDetails={yellowNotice?._links?.self?.href}
                  linkImages={yellowNotice?._links?.images?.href}
                />
              </>
            );
          })}
      </div>
      <div className='divCard'>
        {red &&
          dataList?._embedded?.notices?.map((item, index) => {
            return (
              <>
                <Cards
                  key={index}
                  fname={item?.forename}
                  lname={item?.name}
                  dateOfBirth={item?.date_of_birth}
                  nationalities={item?.nationalities}
                  imag={item?._links?.thumbnail?.href}
                  badgeColor={"danger"}
                  linkDetails={item?._links?.self?.href}
                  linkImages={item?._links?.images?.href}
                />
              </>
            );
          })}
      </div>
      <div className='divCard'>
        {yellow &&
          dataYellowList?._embedded?.notices?.map((item, index) => {
            return (
              <>
                <Cards
                  key={index}
                  fname={item?.forename}
                  lname={item?.name}
                  dateOfBirth={item?.date_of_birth}
                  nationalities={item?.nationalities}
                  imag={item?._links?.thumbnail?.href}
                  badgeColor={"warning"}
                  linkDetails={item?._links?.self?.href}
                  linkImages={item?._links?.images?.href}
                />
              </>
            );
          })}
      </div>
      
    </>
  );
};
export default HomePage;
