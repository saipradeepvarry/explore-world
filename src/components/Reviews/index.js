// import React from "react";

// import "./index.css";

// const Reviews = () => {
//   return (
//     <div className="feedback">
//       <div className="container">
//         <h4 className="label">student testimonials</h4>
//         <h2 className="heading">What Our Students Say</h2>
//         <p className="paragraph">
//           Hear from our students about their experience with our courses.
//         </p>
//       </div>

//       <div className="voices">
//         <div className="voice box1">
//           <div className="profile">
//             {/* <img src="photo1.jpg" alt="" /> */}
//             <div className="detail">
//               <li>mukesh </li>
//               <li>Hospitality Management Student</li>
//             </div>
//           </div>
//           <p>
//             "The Hospitality Management course provided me with invaluable
//             knowledge and practical skills. I now feel confident to pursue a
//             career in the hospitality industry. Highly recommended!"
//           </p>
//         </div>
//         <div className="voice box2">
//           <div className="profile">
//             {/* <img src="" alt="" /> */}
//             <div className="detail">
//               <li>Zoyo Alex</li>
//               <li>Tourism Marketing Student</li>
//             </div>
//           </div>
//           <p>
//             "I thoroughly enjoyed the Tourism Marketing Strategies course. It
//             offered a comprehensive overview of digital marketing techniques and
//             their application in the tourism sector. Great course!"
//           </p>
//         </div>
//         <div className="voice box3">
//           <div className="profile">
//             {/* <img src="photo3.jpg" alt="" /> */}
//             <div className="detail">
//               <li>Pradeep</li>
//               <li>Experience Management Student</li>
//             </div>
//           </div>
//           <p>
//             "Customer Experience Management course exceeded my expectations. The
//             content was well-structured, and the instructors were knowledgeable.
//             I learned practical strategies to enhance guest satisfaction."
//           </p>
//         </div>
//         <div className="voice box4">
//           <div className="profile">
//             {/* <img src="photo4.jpg" alt="" /> */}
//             <div className="detail">
//               <li>James Wilson</li>
//               <li>Event Management Student</li>
//             </div>
//           </div>
//           <p>
//             "Event Management in Tourism course was informative and engaging. It
//             provided insights into planning and executing successful events in
//             the tourism industry. I would recommend it to anyone interested in
//             event management."
//           </p>
//         </div>
//         <div className="voice box5">
//           <div className="profile">
//             {/* <img src="photo5.jpg" alt="" /> */}
//             <div className="detail">
//               <li>Emma Davis</li>
//               <li>Destination Management Student</li>
//             </div>
//           </div>
//           <p>
//             Destination Management course exceeded my expectations. The content
//             was well-structured, and the instructors were knowledgeable. I
//             learned practical strategies for sustainable destination
//             development."
//           </p>
//         </div>
//         <div className="voice box6">
//           <div className="profile">
//             {/* <img src="photo6.jpg" alt="" /> */}
//             <div className="detail">
//               <li>Emily Parker</li>
//               <li>Tourism Management Student</li>
//             </div>
//           </div>
//           <p>
//             "Enrolling in the Tourism Management course was one of the best
//             decisions I've made for my career. The comprehensive curriculum
//             covered all aspects of the tourism industry, from sustainable
//             development to marketing strategies."
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;

// StudentTestimonials.js
import React from "react";
import "./index.css";
// APP to upadate StudentTestimonials
const Reviews = () => {
  return (
    <section className="feedback">
      <div className="container">
        <h2 className="heading">What Our Students Say</h2>
        <p className="paragraph">
          <span className="blink" style={{ color: "red" }}>
            Hear from our students about their experience with our courses.
          </span>
        </p>
      </div>

      <div className="voices">
        <div className="voice">
          <div className="profile-detail">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321728/photo1_kkdz1j.jpg"
              alt=""
            />
            <div className="detail">
              <h3>Mukesh </h3>
              <p className="student-info">Hospitality Management Student</p>
            </div>
          </div>
          <p className="testimonial">
            "The Hospitality Management course provided me with invaluable
            knowledge and practical skills. I now feel confident to pursue a
            career in the hospitality industry. Highly recommended!"
          </p>
        </div>
        <div className="voice">
          <div className="profile-detail">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321791/photo2_fegcer.jpg"
              alt=""
            />
            <div className="detail">
              <h3>Zoyo Alex</h3>
              <p className="student-info">Tourism Marketing Student</p>
            </div>
          </div>
          <p className="testimonial">
            "I thoroughly enjoyed the Tourism Marketing Strategies course. It
            offered a comprehensive overview of digital marketing techniques and
            their application in the tourism sector. Great course!"
          </p>
        </div>
        <div className="voice">
          <div className="profile-detail">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321836/photo3_qtn4wj.jpg"
              alt=""
            />
            <div className="detail">
              <h3>Pradeep</h3>
              <p className="student-info">Experience Management Student</p>
            </div>
          </div>
          <p className="testimonial">
            "Customer Experience Management course exceeded my expectations. The
            content was well-structured, and the instructors were knowledgeable.
            I learned practical strategies to enhance guest satisfaction."
          </p>
        </div>
        <div className="voice">
          <div className="profile-detail">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321877/photo4_q57ryq.jpg"
              alt=""
            />
            <div className="detail">
              <h3>James Wilson</h3>
              <p className="student-info">Event Management Student</p>
            </div>
          </div>
          <p className="testimonial">
            "Event Management in Tourism course was informative and engaging. It
            provided insights into planning and executing successful events in
            the tourism industry. I would recommend it to anyone interested in
            event management."
          </p>
        </div>
        <div className="voice">
          <div className="profile-detail">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321931/photo5_vzwxgp.jpg"
              alt=""
            />
            <div className="detail">
              <h3>Emma Davis</h3>
              <p className="student-info">Destination Management Student</p>
            </div>
          </div>
          <p className="testimonial">
            "Destination Management course exceeded my expectations. The content
            was well-structured, and the instructors were knowledgeable. I
            learned practical strategies for sustainable destination
            development."
          </p>
        </div>
        <div className="voice">
          <div className="profile-detail">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/djlhr4ycg/image/upload/v1715321999/photo6_iph1yy.jpg"
              alt=""
            />
            <div className="detail">
              <h3>Emily Parker</h3>
              <p className="student-info">Tourism Management Student</p>
            </div>
          </div>
          <p className="testimonial">
            "Enrolling in the Tourism Management course was one of the best
            decisions I've made for my career. The comprehensive curriculum
            covered all aspects of the tourism industry, from sustainable
            development to marketing strategies."
          </p>
        </div>
      </div>
    </section>
  );
};

// export as StudentTestimonials
export default Reviews;
