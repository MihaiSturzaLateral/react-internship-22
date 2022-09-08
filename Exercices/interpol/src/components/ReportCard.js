import "./ReportCard.css";
import { dispatch, useState } from "react";
import {
  get_reportsAction,
  delete_reportAction,
} from "./redux/actions/creator";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModalUpdate from "./ModalUpdate";

const ReportCard = ({
  imgReport,
  firstName,
  lastName,
  notice,
  sex,
  nationalities,
  id,
  birthDate,
  urlImage
}) => {
  let dispatch = useDispatch();
  const reports = useSelector((state) => state.persons);
  const getData = () => {
    dispatch(get_reportsAction());
  };
  const onDelete = (id, notice) => {
    delete_reportAction(
      id,
      notice
    )(dispatch)
      .then(() => {
        getData();
      })
      .catch((e) => console.log(e));
  };
  const [ModalUpdateIsOpen, setModalIsOpen] = useState(false);
  const getAges = (birthDate) => {
    let d = new Date();
    let y = d.getFullYear();
    let date = new Date(birthDate);
    let b = date.getFullYear();
    return y - b;
  };
  return (
    <>
      <div className="card-report">
        <label className="card-label" style={{ backgroundColor: `${notice}` }}>
          Wanted
        </label>
        <div className="image-rep">
          <img alt="img" src={urlImage} />
        </div>
        <div className="information">
          <div className="name">
            {firstName} {lastName}
          </div>
          <div className="sex" id="sex">
            Sex: {sex}
          </div>
          <div className="birth" id="birth">
            Date of birth: {birthDate}{" "}
          </div>
          <div className="age" id="age">
            Age: {getAges(birthDate)}
          </div>
          <div className="nat" id="nat">
            Nationalities: {nationalities}
          </div>
          <Link
            to="/update"
            state={{
              updatedId: id,
              firstNameUp: firstName,
              lastNameUp: lastName,
              birthDate: birthDate,
              nationalityUp: nationalities,
              sexUp: sex,
              notice: notice,
            }}
          >
            <button className="btn-edit">Edit</button>
          </Link>
          <button
            className="btn-delete"
            onClick={() => {
              onDelete(id, notice);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ReportCard;
