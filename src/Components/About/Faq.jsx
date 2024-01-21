import React, { useState } from "react";
import "./Faq.css";

const Faq = ({ id, title, desc }) => {
  const [Toggle, setToggle] = useState(false);

  return (
    <article className="container">
      <div className="row">
        <div className="content">
          <div className="  col-lg-11 col-md-11 ">
            <h4>{title}</h4>
          </div>
          <button
            className="  btn3 col-lg-1 col-md-1 "
            onClick={() => {
              setToggle(!Toggle);
            }}
          >
            {Toggle ? "-" : "+"}
          </button>
        </div>

        {Toggle && <p className="desc">{desc}</p>}
      </div>
    </article>
  );
};

export default Faq;
