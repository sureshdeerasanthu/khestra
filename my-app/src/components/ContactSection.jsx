import React from "react";

const ContactSection = () => {
  return (
          <section id="ss7">
        <div className="container">
          <div className="vectors">
            {[...Array(6).keys()].map((i) => (
              <div className={`rr${i + 18}`} key={i}>
                <img
                  src={`/svg icons/${
                    i < 4
                      ? `icon-${
                          ["globe", "atom", "lightbulb", "magnifier"][i]
                        }.svg`
                      : "Vector (2).svg"
                  }`}
                  alt="icon"
                />
              </div>
            ))}
          </div>
          <div className="footer">
            <h1>Join our world today.</h1>
          </div>
          <div className="footer1">
            <p>
              Call +91 74164 26688 | +91 74165 26688 Email:
              contact@kshetraedu.com
            </p>
          </div>
          <div className="footer2">
            <img src="/images/Group 2487.png" alt="footer visual" />
            <h1>Our Locations:</h1>
          </div>
          <div className="footer3">
            <p>Miyapur | Nallagandla | Manikonda</p>
            <p>Karkhana | Tirumalagiri | Langar Houz | AS Rao Nagar</p>
          </div>
          <div className="footer5">
            <img src="/images/Group 2498.png" alt="footer icon" />
          </div>
          <div className="footer4">
            <h1>© kshetra2022 All Rights Reserved.</h1>
          </div>
        </div>
      </section>
  
    );
};

export default ContactSection;
