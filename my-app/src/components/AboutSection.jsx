import React from "react";

const AboutSection = () => {
  return (
    <section id="ss2">
      <div className="container">
        <div className="section">
          {[...Array(8).keys()].map((i) => (
            <div className={`rr${i + 1}`} key={i}>
              <img
                src={`/svg icons/${i < 5
                    ? `icon-${["pencil", "globe", "atom", "lightbulb", "magnifier"][
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

        <div className="fff">
          <div className="about-box">
            <div className="about-title">About Us</div>
            <p className="about-text">
              A brainchild of Mr. PVRK Murthy, Founder of Srigayatri
              Educational Institutions, Kshetra brings over 4 decades of
              educational expertise and a sophisticated teaching culture that
              focuses on helping students realise their goals by moulding
              their deep thinking and analytical skills from a very young age
              to master their competitive exams.
            </p>
          </div>
          <div className="about-box">
            <div className="about-subtitle">What We Do</div>
            <p className="about-text">
              Based on updated NEP criteria and learning loss created by
              Covid-19, we strengthen the basics of students by prioritising
              personalisation and dedicated attention to ensure that the
              concepts are practiced.
            </p>
            <div className="about-subtitle">How We Do It</div>
            <p className="about-text">
              Our 360 degree approach allows students to focus on and excel in
              their academics. We provide both online and offline learning
              programs to choose from, facilitating deep thinking in kids.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
