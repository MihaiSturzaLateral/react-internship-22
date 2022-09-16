import React from "react";
import Badge from "react-bootstrap/Badge";

const BadgeDetailsPage = ({ fname,lname, color, title }) => {
  return (
    <Badge bg={color} style={{ padding: "20px", marginBottom:'10px'}}>
      {title}
      {fname}
      {' '}
      {lname}
    </Badge>
  );
};

export default BadgeDetailsPage;
