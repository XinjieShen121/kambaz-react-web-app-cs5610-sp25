import { useParams, useLocation, NavLink } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();       // Retrieve course ID from the URL
  const { pathname } = useLocation(); // Retrieve the current URL pathname

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link);  // Check if the link is part of the current path
        return (
          <NavLink
            key={link}
            to={`/Kambaz/Courses/${cid}/${link}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={({ isActive: navIsActive }) =>
              `list-group-item border-0 ${
                isActive || navIsActive
                  ? "text-black fw-bold border-start border-3 border-dark ps-3"
                  : "text-danger ps-3"
              }`
            }
          >
            {link}
          </NavLink>
        );
      })}
    </div>
  );
}