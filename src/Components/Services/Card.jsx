import React from "react";
import { Card, NavLink } from "react-bootstrap";
import "./Services.css";

const CardS = ({ imgsrc, title }) => {
  return (
    <>
      <div className="Service__container col-md-4 col-lg-4 col-sm-10 mx-auto">
        <Card>
          <Card.Img variant="top" src={imgsrc} alt={imgsrc} />
          <Card.Body>
            <Card.Title className="title__text">{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <NavLink to="/" className="btn2">
              Order Now
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardS;
