import React, { useState } from "react";
import CardS from "./Card";
import ServicesData from "./ServicesData";
import "./Services.css";

const Services = () => {
  const [data] = useState(ServicesData);
  return (
    <>
      <div className="my-5">
        <h2 className="text-center mt-5 mb-5">Our Services</h2>
        <div className="container-fluid mb-5 Service__container">
          <div className="row">
            <div className="col-10  mx-auto">
              <div className="row gy-4">
                {data.map((dataHub, index) => {
                  return (
                    <CardS
                      imgsrc={dataHub.imgsrc}
                      title={dataHub.title}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
