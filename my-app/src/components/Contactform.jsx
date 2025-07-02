import React from "react";

const ContactForm = () => {
  return (
    <section id="ss6">
      <div className="container">
        <form id="contact-form">
          <div className="pp1">
            <h1>Contact Our Team</h1>
            <p>Enrol your child using our online enquiry form</p>
            <label>
              Parent's Name<span>*</span>
            </label>
            <br />
            <input type="text" required />
          </div>

          <div className="field">
            <div className="box1">
              <label htmlFor="phone">
                Phone number<span>*</span>
              </label>
              <br />
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="box2">
              <label htmlFor="parent-email">Parent's Email</label>
              <br />
              <input type="email" id="parent-email" name="parent-email" />
            </div>
          </div>

          <div className="box">
            <label>
              Programme Enrollment<span>*</span>
            </label>
            <br />
            {["Boards", "Foundation", "Competitive Exams"].map((label) => (
              <label key={label}>
                <input type="checkbox" name="programme" value={label} /> {label}
              </label>
            ))}
          </div>

          <div className="box">
            <label>
              In which grade is your child?<span>*</span>
            </label>
            <br />
            {["5 and below", "6 -12", "12 and above"].map((label) => (
              <label key={label}>
                <input type="checkbox" name="grade" value={label} /> {label}
              </label>
            ))}
          </div>

          <div className="pp2">
            <label>Which area are you from?</label>
            <input type="text" name="area" />

            <label>How did you hear about Kshetra classes?</label>
            <input type="text" name="referral" />

            <div className="pp4">
              <label>Let us know if you have any specific requirements</label>
              <input type="text" name="requirements" />
            </div>
          </div>

          <div className="pp3">
            <div className="recaptcha-box">
              <div className="checkbox"></div>
              I'm not a robot
              <div className="recaptcha-logo"></div>
            </div>
          </div>

          <div className="button">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
