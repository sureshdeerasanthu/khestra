import React from "react";

const offeringsData = [
  {
    className: "child1",
    imgSrc: "/images/Academic Organiser 2.png",
    title: "Academic Organiser",
    description:
      "An annual planner with arrayed chapters of each subject, test grids for the sessions, holiday schedules & homework schedules.",
  },
  {
    className: "child2",
    imgSrc: "/images/Preparation For Competitive Exams 1.png",
    title: "Preparation For Competitive Exams",
    description:
      "Dedicated guidance and preparation for competitive exams besides regular classes.",
  },
  {
    className: "child3",
    imgSrc: "/images/Feedback & Analysis 1.png",
    title: "Feedback & Analysis",
    description:
      "Constant feedback is provided to every student to help them track their progress and their performance.",
  },
  {
    className: "child4",
    imgSrc: "/images/Academic Counselling 1.png",
    title: "Academic Counselling",
    description:
      "One-on-one counselling sessions with customised solutions to help students cope with academic and personal problems.",
  },
  {
    className: "child5",
    imgSrc: "/images/Clinical Classes 2.png",
    title: "Clinical Classes",
    description:
      "Compensatory classes for students who miss out on classes due to unavoidable circumstances or late joining. Clinical classes are also to bridge the learning gap caused due to COVID-19.",
  },
  {
    className: "child6",
    imgSrc: "/images/Chapter Practice Exercise (CPE) 1.png",
    title: "Chapter Practice Exercise (CPE)",
    description:
      "Exercises are provided at the end of each chapter to gauge understanding before commencing a new chapter.",
  },
];

const Offerings = () => {
  return (
    <section id="ss3">
      <div className="container">
        <div className="hhh">
          <h1>Our Offerings</h1>
        </div>
        <div className="grid-container">
          {offeringsData.map((item, index) => (
            <div key={index} className={item.className}>
              <img src={item.imgSrc} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;

    
    