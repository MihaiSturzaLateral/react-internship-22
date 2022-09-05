const ReportCard = ({imgReport,firstName,lastName,sex,nationalities}) => {
    return ( 
    <div className="cardd">
        <div className="image">
          <img alt="img" src={imgReport} />
        </div>
        <div className="info">
          <div className="name">
            {firstName} {lastName}
          </div>
          <div className="sex">Sex: {sex}</div>
          {/* <div className="birth">Date of birth: {birthDate} </div> */}
          {/* <div className="age">Age: {getAges(birthDate)}</div> */}
          <div className="nat">Nationalities: {nationalities}</div>
          <button
           
          >
           Edit
          </button>
        </div>
      </div>
    );
}
 
export default ReportCard;