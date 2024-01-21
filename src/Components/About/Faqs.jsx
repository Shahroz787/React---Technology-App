import React, { useState } from "react";
import Faqsdata from "./Faqsdata";
import Faq from "./Faq";
import "./Faq.css";

const Faqs = () => {
  const [Data, setData] = useState(Faqsdata);
  return (
    <div className="container">
      <section className="faqs">
        <h2
          style={{
            textAlign: "center",
            fontSize: "25px",
            marginBottom: "3rem",
            marginTop: "20px",
          }}
        >
          FAQ's Frequently Ask About Us
        </h2>
        {Data.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </section>
    </div>
  );
};

export default Faqs;
