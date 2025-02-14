// import { Link } from "react-router-dom";
// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {/* Course Example Styling */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/1234/Home"
//               >
//                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1234 React JS
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 01</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Full Stack software developer
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Remaining Courses */}
//           {/* Course 1 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/5002/Home"
//               >
//                 <img
//                   src="/images/CS5002.jpg"
//                   width="100%"
//                   height={160}
//                   alt="CS5002"
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5002: Discrete Structures
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 01</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Introduction to discrete mathematics for computer science.
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 2 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/5004/Home"
//               >
//                 <img
//                   src="/images/CS5004.jpg"
//                   width="100%"
//                   height={160}
//                   alt="CS5004"
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5004: Object-Oriented Design
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 02</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Principles and patterns of object-oriented programming.
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 3 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/5008/Home"
//               >
//                 <img
//                   src="/images/CS5008.jpg"
//                   width="100%"
//                   height={160}
//                   alt="CS5008"
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5008: Data Structures, Algorithms, and Computer Systems
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 01</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Foundational concepts in data structures and algorithms.
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 4 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/5200/Home"
//               >
//                 <img
//                   src="/images/CS5200.jpg"
//                   width="100%"
//                   height={160}
//                   alt="CS5200"
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5200: Database Management
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 01</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Comprehensive study of database systems and design.
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 5 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/5340/Home"
//               >
//                 <img
//                   src="/images/CS5340.jpg"
//                   width="100%"
//                   height={160}
//                   alt="CS5340"
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5340: Human-Computer Interaction
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 02</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Design and evaluation of user-centered systems.
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 6 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/5610/Home"
//               >
//                 <img
//                   src="/images/CS5610.jpg"
//                   width="100%"
//                   height={160}
//                   alt="CS5610"
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5610: Web Development
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 03</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Building modern web applications using frameworks.
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 7 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden h-100">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kambaz/Courses/5780/Home"
//               >
//                 <img
//                   src="/images/CS5780.jpg"
//                   width="100%"
//                   height={160}
//                   alt="CS5780"
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS5780: Advanced Data Analytics
//                   </h5>
//                   <h6 className="text-muted">2025 Spring Section 04</h6>
//                   <p className="wd-dashboard-course-title card-text">
//                     Techniques and tools for analyzing complex datasets.
//                   </p>
//                   <div className="d-flex justify-content-start mt-auto">
//                     <button className="btn btn-primary">Go</button>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  {/* Dynamically render the course image */}
                  <img src={course.image} alt={course.name} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
