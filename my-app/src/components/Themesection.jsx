import React from "react";

const ThemeSection = () => {
  return (
<section id="ss4">
        <img src="/images/image1.png" id="theme" alt="theme" />
        <div className="container">
          <div className="vector">
            {[...Array(8).keys()].map((i) => (
              <div className={`rr${i + 9}`} key={i}>
                <img
                  src={`/svg icons/${
                    i < 5
                      ? `icon-${
                          ["pencil", "globe", "atom", "lightbulb", "magnifier"][
                            i
                          ]
                        }.svg`
                      : "Vector (2).svg"
                  }`}
                  alt="icon"
                />
              </div>
            ))}
          </div>
          <div className="pen">
            <div className="hell">
              <h1>The Foundation Children Need.</h1>
              <p>
                Kshetra was created to provide students with the helping hand
                they need to find the success they deserve. We give you the
                right platform to sharpen your mind and help you achieve your
                goals.
              </p>
            </div>
            <div className="hell1">
              <h1>Classes VI - XII</h1>
            </div>
            <div className="hell2">
              <p>Boards | Foundation | Competitive Exams</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ThemeSection;
