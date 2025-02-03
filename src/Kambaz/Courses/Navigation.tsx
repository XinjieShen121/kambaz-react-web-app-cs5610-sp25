// import { useParams, Link } from "react-router-dom";
// export default function CourseNavigation() {
//     const { cid } = useParams();  // Retrieve 'cid' from the URL
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link
//         to="/Kambaz/Courses/1234/Home"
//         id="wd-course-home-link"
//         className="list-group-item active border border-0"
//       >
//         Home
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Modules"
//         id="wd-course-modules-link"
//         className="list-group-item text-danger border border-0"
//       >
//         Modules
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Piazza"
//         id="wd-course-piazza-link"
//         className="list-group-item text-danger border border-0"
//       >
//         Piazza
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Zoom"
//         id="wd-course-zoom-link"
//         className="list-group-item text-danger border border-0"
//       >
//         Zoom
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Assignments"
//         id="wd-course-assignments-link"
//         className="list-group-item text-danger border border-0"
//       >
//         Assignments
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Quizzes"
//         id="wd-course-quizzes-link"
//         className="list-group-item text-danger border border-0"
//       >
//         Quizzes
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Grades"
//         id="wd-course-grades-link"
//         className="list-group-item text-danger border border-0"
//       >
//         Grades
//       </Link>
//       <Link
//         to={`/Kambaz/Courses/${cid}/People`}
//         id="wd-course-people-link"
//         className="list-group-item text-danger border border-0"
//       >
//         People
//       </Link>
//     </div>
//   );
// }

import { useParams, NavLink } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams(); // Retrieve 'cid' from the URL

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        Modules
      </NavLink>

      <NavLink
        to="/Kambaz/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        Piazza
      </NavLink>

      <NavLink
        to="/Kambaz/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        Zoom
      </NavLink>

      <NavLink
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        Assignments
      </NavLink>

      <NavLink
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        Quizzes
      </NavLink>

      <NavLink
        to="/Kambaz/Courses/1234/Grades"
        id="wd-course-grades-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        Grades
      </NavLink>

      <NavLink
        to={`/Kambaz/Courses/${cid}/People`}
        id="wd-course-people-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive ? "text-black fw-bold border-start border-3 border-dark ps-3" : "text-danger ps-3"
          }`
        }
      >
        People
      </NavLink>
    </div>
  );
}