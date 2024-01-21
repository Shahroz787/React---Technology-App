import React from "react";
import { NavLink } from "react-bootstrap";
import "./Combined.css";

const Combined = ({ title, visit, imgsrc, btnName }) => {
  return (
    <>
      <section id="header">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-10 col-md-12 col-sm-12 mx-auto ">
              <div className="row">
                <div
                  id="hero__content"
                  className="col-md-6 col-lg-6 pt-5 pt-lg-0 col-sm-12 order-2 order-lg-1 d-flex justify-content-center flex-column"
                >
                  <h1>
                    {title} <br />
                    <strong className="heroText">Shahroz Tech</strong>
                  </h1>
                  <div className="my-3 hero__bio">
                    We are are skilled persons for making any kind of website
                  </div>
                  <div className="mt-3">
                    <NavLink href={visit} className="btn btn-outline-primary">
                      {btnName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Combined;
