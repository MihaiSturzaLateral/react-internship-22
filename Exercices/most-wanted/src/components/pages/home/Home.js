import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetNotices } from "../../redux/Home/homeActions";
import Cards from "../card/Card";
import "../home/Home.css";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ReactPaginate from "react-paginate";

const Home = () => {
  let dispatch = useDispatch();
  const notices = useSelector((state) => state);
  let [allNotices, setAllNotices] = useState(true);
  let [redNotices, setRedNotices] = useState(false);
  let [yellowNotices, setYellowNotices] = useState(false);

  useEffect(() => {
    dispatch(actionGetNotices());
  }, []);

  return (
    <>
      <div className="buttons">
        <Button
          variant="danger"
          onClick={() => {
            setAllNotices(false);
            setRedNotices(true);
            setYellowNotices(false);
          }}
        >
          Red Notices
        </Button>
        <Button
          variant="warning"
          onClick={() => {
            setAllNotices(false);
            setRedNotices(false);
            setYellowNotices(true);
          }}
        >
          Yellow Notices
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setAllNotices(true);
            setRedNotices(false);
            setYellowNotices(false);
          }}
        >
          All Notices
        </Button>
        <Badge className="wantedBadge" bg="light" text="dark">
          Total Wanted:{" "}
          {allNotices
            ? notices?.notices?.responseOne?.total +
              notices?.notices?.responseTwo?.total
            : redNotices
            ? notices?.notices?.responseOne?.total
            : notices?.notices?.responseTwo?.total}
        </Badge>
      </div>
      <div>
        {allNotices &&
          notices?.notices?.responseOne?._embedded?.notices?.map(
            (item, index) => {
              const yellowData =
                notices?.notices?.responseTwo?._embedded?.notices[index];
              return (
                <>
                  <Cards
                    key={index}
                    name={item?.name}
                    forename={item?.forename}
                    nationalities={item?.nationalities}
                    dateOfBirth={item?.date_of_birth}
                    image={item?._links?.thumbnail?.href}
                    badgeColor={"danger"}
                    detail={item?._links?.self?.href}
                  />
                  <Cards
                    name={yellowData?.name}
                    forename={yellowData?.forename}
                    nationalities={yellowData?.nationalities}
                    dateOfBirth={yellowData?.date_of_birth}
                    image={yellowData?._links?.thumbnail?.href}
                    badgeColor={"warning"}
                    detail={yellowData?._links?.self?.href}
                  />
                </>
              );
            }
          )}
      </div>
      <div>
        {redNotices &&
          notices?.notices?.responseOne?._embedded?.notices?.map(
            (item, index) => {
              return (
                <Cards
                  key={index}
                  name={item?.name}
                  forename={item?.forename}
                  nationalities={item?.nationalities}
                  dateOfBirth={item?.date_of_birth}
                  image={item?._links?.thumbnail?.href}
                  badgeColor={"danger"}
                  detail={item?._links?.self?.href}
                />
              );
            }
          )}
      </div>
      <div>
        {yellowNotices &&
          notices?.notices?.responseTwo?._embedded?.notices?.map(
            (item, index) => {
              return (
                <Cards
                  key={index}
                  name={item?.name}
                  forename={item?.forename}
                  nationalities={item?.nationalities}
                  dateOfBirth={item?.date_of_birth}
                  image={item?._links?.thumbnail?.href}
                  badgeColor={"warning"}
                  detail={item?._links?.self?.href}
                />
              );
            }
          )}
      </div>
      <div className="paginate">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={8}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};
export default Home;
