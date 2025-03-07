


import { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll } from "./Courses/Enrollments/reducer"; 

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse, 
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  // Store enrollments in React state (fixes UI updates)
  const [enrollments, setEnrollments] = useState(db.enrollments);

  //  Toggle enrollment state
  const handleEnrollment = (courseId: string) => {
    if (
      enrollments.some(
        (enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
      )
    ) {
      dispatch(unenroll({ userId: currentUser._id, courseId }));
      setEnrollments(enrollments.filter((e) => !(e.user === currentUser._id && e.course === courseId)));
    } else {
      dispatch(enroll({ userId: currentUser._id, courseId }));
      // setEnrollments([...enrollments, { user: currentUser._id, course: courseId }]);
      setEnrollments([...enrollments, { _id: uuidv4(), user: currentUser._id, course: courseId }]);
    }
  };

  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} // ✅ Keep exactly the same
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
      )}

      <br />
      {isFaculty && (
        <>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}
      <hr />

      {isStudent && (
        <button
          className="btn btn-info float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) =>
              showAllCourses
                ? true
                : enrollments.some(
                    (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
                  )
            )
            .map((course) => {
              const isEnrolled = enrollments.some(
                (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
              );

              return (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <img src={course.image} alt={course.name} width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description}
                        </p>
                        <button className="btn btn-primary">Go</button>

                        {isFaculty && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}

                        {isStudent && (
                          <button
                            className={`btn float-end ${isEnrolled ? "btn-danger" : "btn-success"}`}
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnrollment(course._id);
                            }}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}