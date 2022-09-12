import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Card from "./components/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchPerson, _fetchAllPerson } from "../../redux/action";
import Footer from "../../components/Footer";
function Home() {
  const { persons, personsAll } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [all, setAll] = useState("false");
  useEffect(() => {
    dispatch(_fetchAllPerson());
    setAll("true");
  }, [dispatch]);
  const mainHead = () => {
    return (
      <div className="main-head container-sm mb-5">
        <div>
          <button
            type="button"
            className="btn btn-danger ms-4"
            onClick={() => {
              setAll("false");
              setColor("red");
              dispatch(
                fetchPerson(
                  `https://ws-public.interpol.int/notices/v1/red?page=1&resultPerPage=20`
                )
              );
            }}
          >
            Red Notices
          </button>
          <button
            type="button"
            className="btn btn-warning ms-4"
            onClick={() => {
              setAll("false");
              setColor("yellow");
              dispatch(
                fetchPerson(
                  "https://ws-public.interpol.int/notices/v1/yellow?page=1&resultPerPage=20"
                )
              );
            }}
          >
            Yellow Notices
          </button>
        </div>
        <div className="total-wanted">
          Total Wanted:<span>{persons.total}</span>
        </div>
      </div>
    );
  };
  // console.log(personsAll);
  const allPersons = () => {
    let color = "";
    let i = 0;
    return personsAll.length !== 0 ? (
      personsAll.map((person) => {
        i++;
        i <= 20 ? (color = "red") : (color = "yellow");
        return (
          <Card
            key={person.entity_id}
            fullname={person.forename}
            date={person.date_of_birth}
            nat={person.nationalities}
            url={person._links?.thumbnail?.href}
            age={
              new Date().getFullYear() -
              new Date(person.date_of_birth).getFullYear()
            }
            color={color}
            detUrl={person.entity_id}
          />
        );
      })
    ) : (
      <h1>loading...</h1>
    );
  };
  const main = () => {
    return (
      <main className="container-sm d-flex flex-wrap justify-content-between mobile">
        {all === "true" ? (
          allPersons()
        ) : persons.length !== 0 ? (
          persons._embedded.notices.map((person) => {
            return (
              <Card
                key={person.entity_id}
                fullname={person.forename}
                date={person.date_of_birth}
                nat={person.nationalities}
                url={person._links?.thumbnail?.href}
                age={
                  new Date().getFullYear() -
                  new Date(person.date_of_birth).getFullYear()
                }
                color={color}
                detUrl={person.entity_id}
              />
            );
          })
        ) : (
          <h1>loading...</h1>
        )}
      </main>
    );
  };
  return (
    <>
      <NavBar />
      {mainHead()}
      {main()}
      {all === "true" ? null : (
        <div className="mt-5">
          <ul className="pagination justify-content-center ">
            <li className="page-item">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(
                    fetchPerson(
                      `https://ws-public.interpol.int/notices/v1/${color}?page=2&resultPerPage=20`
                    )
                  );
                }}
              >
                2
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(
                    fetchPerson(
                      `https://ws-public.interpol.int/notices/v1/${color}?page=3&resultPerPage=20`
                    )
                  );
                }}
              >
                3
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(
                    fetchPerson(
                      `https://ws-public.interpol.int/notices/v1/${color}?page=4&resultPerPage=20`
                    )
                  );
                }}
              >
                4
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(
                    fetchPerson(
                      `https://ws-public.interpol.int/notices/v1/${color}?page=5&resultPerPage=20`
                    )
                  );
                }}
              >
                5
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(
                    fetchPerson(
                      `https://ws-public.interpol.int/notices/v1/${color}?page=6&resultPerPage=20`
                    )
                  );
                }}
              >
                6
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(
                    fetchPerson(
                      `https://ws-public.interpol.int/notices/v1/${color}?page=7&resultPerPage=20`
                    )
                  );
                }}
              >
                7
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  dispatch(
                    fetchPerson(
                      `https://ws-public.interpol.int/notices/v1/${color}?page=8&resultPerPage=20`
                    )
                  );
                }}
              >
                8
              </button>
            </li>
          </ul>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;
