import React from 'react';

function HeroSection() {
  return (
   <section id="ss1">
        <div className="container">
          <div className="ggg">
            <div>
              <h1>
                Igniting the young minds
                <span className="highlight">of tomorrow.</span>
              </h1>
              <p>
                Enrol in our after school programs. Batches starting from July,
                2022.
              </p>
              <button id="button">Get in touch</button>
            </div>
            <div className="Frame">
              <img
                src="/images/Group 2542.png"
                className="desktop"
                alt="desktop visual"
              />
              <img
                src="/images/Group 2550.png"
                className="mobile"
                alt="mobile visual"
              />
            </div>
          </div>

          <div className="text">
            <div className="class1">
              <h1>Creating a learning environment beyond classrooms.</h1>
            </div>
            <div className="class2">
              <div className="test">
                <h1>Classes VI - XII</h1>
                <p>Boards | Foundation | Competitive Exams</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default HeroSection;
