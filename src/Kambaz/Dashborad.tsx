


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import * as db from "./Database";
// import { v4 as uuidv4 } from "uuid";
// import { useSelector, useDispatch } from "react-redux";
// import { enroll, unenroll } from "./Courses/Enrollments/reducer"; 

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse, 
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const dispatch = useDispatch();

//   const isFaculty = currentUser?.role === "FACULTY";
//   const isStudent = currentUser?.role === "STUDENT";

//   // Store enrollments in React state (fixes UI updates)
//   //const [enrollments, setEnrollments] = useState(db.enrollments);

//   //  Toggle enrollment state
//   // const handleEnrollment = (courseId: string) => {
//   //   if (
//   //     enrollments.some(
//   //       (enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
//   //     )
//   //   ) {
//   //     dispatch(unenroll({ userId: currentUser._id, courseId }));
//   //     setEnrollments(enrollments.filter((e) => !(e.user === currentUser._id && e.course === courseId)));
//   //   } else {
//   //     dispatch(enroll({ userId: currentUser._id, courseId }));
//   //     // setEnrollments([...enrollments, { user: currentUser._id, course: courseId }]);
//   //     setEnrollments([...enrollments, { _id: uuidv4(), user: currentUser._id, course: courseId }]);
//   //   }
//   // };

//   const [showAllCourses, setShowAllCourses] = useState(false);

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {isFaculty && (
//         <h5>
//           New Course
//           <button
//             className="btn btn-primary float-end"
//             id="wd-add-new-course-click"
//             onClick={addNewCourse} // ✅ Keep exactly the same
//           >
//             Add
//           </button>
//           <button
//             className="btn btn-warning float-end me-2"
//             onClick={updateCourse}
//             id="wd-update-course-click"
//           >
//             Update
//           </button>
//         </h5>
//       )}

//       <br />
//       {isFaculty && (
//         <>
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//         </>
//       )}
//       <hr />

//       {isStudent && (
//         <button
//           className="btn btn-info float-end mb-3"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//         >
//           {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
//         </button>
//       )}

//       <h2 id="wd-dashboard-published">
//         Published Courses ({courses.length})
//       </h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses
//             // .filter((course) =>
//             //   showAllCourses
//             //     ? true
//             //     : enrollments.some(
//             //         (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
//             //       )
//             // )
//             .map((course) => {
//               const isEnrolled = enrollments.some(
//                 (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
//               );

//               return (
//                 <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//                   <div className="card rounded-3 overflow-hidden">
//                     <Link
//                       to={`/Kambaz/Courses/${course._id}/Home`}
//                       className="wd-dashboard-course-link text-decoration-none text-dark"
//                     >
//                       <img src={course.image} alt={course.name} width="100%" height={160} />
//                       <div className="card-body">
//                         <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
//                         <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                           {course.description}
//                         </p>
//                         <button className="btn btn-primary">Go</button>

//                         {isFaculty && (
//                           <>
//                             <button
//                               onClick={(event) => {
//                                 event.preventDefault();
//                                 deleteCourse(course._id);
//                               }}
//                               className="btn btn-danger float-end"
//                               id="wd-delete-course-click"
//                             >
//                               Delete
//                             </button>
//                             <button
//                               id="wd-edit-course-click"
//                               onClick={(event) => {
//                                 event.preventDefault();
//                                 setCourse(course);
//                               }}
//                               className="btn btn-warning me-2 float-end"
//                             >
//                               Edit
//                             </button>
//                           </>
//                         )}

//                         {isStudent && (
//                           <button
//                             className={`btn float-end ${isEnrolled ? "btn-danger" : "btn-success"}`}
//                             onClick={(event) => {
//                               event.preventDefault();
//                               handleEnrollment(course._id);
//                             }}
//                           >
//                             {isEnrolled ? "Unenroll" : "Enroll"}
//                           </button>
//                         )}
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import { Link } from "react-router-dom";
// // Removed: import * as db from "./Database";
// import { v4 as uuidv4 } from "uuid";
// import { useSelector, useDispatch } from "react-redux";
// import { enroll, unenroll } from "./Courses/Enrollments/reducer"; 

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse, 
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const dispatch = useDispatch();

//   const isFaculty = currentUser?.role === "FACULTY";
//   const isStudent = currentUser?.role === "STUDENT";

//   // REMOVED: local enrollments state because server now filters courses
//   // const [enrollments, setEnrollments] = useState(db.enrollments);

//   // REMOVED: showAllCourses state and filtering logic based on enrollments

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {isFaculty && (
//         <h5>
//           New Course
//           <button
//             className="btn btn-primary float-end"
//             id="wd-add-new-course-click"
//             onClick={addNewCourse}
//           >
//             Add
//           </button>
//           <button
//             className="btn btn-warning float-end me-2"
//             onClick={updateCourse}
//             id="wd-update-course-click"
//           >
//             Update
//           </button>
//         </h5>
//       )}

//       <br />
//       {isFaculty && (
//         <>
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//         </>
//       )}
//       <hr />

//       {/* Removed the "Enrollments" toggle button because the server handles filtering */}

//       <h2 id="wd-dashboard-published">
//         Published Courses ({courses.length})
//       </h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses.map((course) => {
//             // No need to compute isEnrolled; server already returns enrolled courses.
//             return (
//               <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//                 <div className="card rounded-3 overflow-hidden">
//                   <Link
//                     to={`/Kambaz/Courses/${course._id}/Home`}
//                     className="wd-dashboard-course-link text-decoration-none text-dark"
//                   >
//                     <img src={course.image} alt={course.name} width="100%" height={160} />
//                     <div className="card-body">
//                       <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
//                       <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                         {course.description}
//                       </p>
//                       <button className="btn btn-primary">Go</button>

//                       {isFaculty && (
//                         <>
//                           <button
//                             onClick={(event) => {
//                               event.preventDefault();
//                               deleteCourse(course._id);
//                             }}
//                             className="btn btn-danger float-end"
//                             id="wd-delete-course-click"
//                           >
//                             Delete
//                           </button>
//                           <button
//                             id="wd-edit-course-click"
//                             onClick={(event) => {
//                               event.preventDefault();
//                               setCourse(course);
//                             }}
//                             className="btn btn-warning me-2 float-end"
//                           >
//                             Edit
//                           </button>
//                         </>
//                       )}

//                       {isStudent && (
//                         <button
//                           className="btn float-end btn-danger"
//                           onClick={(event) => {
//                             event.preventDefault();
//                             // Enrollment toggling is now handled by the server.
//                           }}
//                         >
//                           Unenroll
//                         </button>
//                       )}
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }










// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   const isFaculty = currentUser?.role === "FACULTY";

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {isFaculty && (
//         <h5>
//           New Course
//           <button
//             className="btn btn-primary float-end"
//             onClick={addNewCourse}
//           >
//             Add
//           </button>
//           <button
//             className="btn btn-warning float-end me-2"
//             onClick={updateCourse}
//           >
//             Update
//           </button>
//         </h5>
//       )}

//       <br />
//       {isFaculty && (
//         <>
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//         </>
//       )}

//       <hr />
//       <h2 id="wd-dashboard-published">
//         Published Courses ({courses.length})
//       </h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses.map((course) => (
//             <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//               <div className="card rounded-3 overflow-hidden">
//                 <Link
//                   to={`/Kambaz/Courses/${course._id}/Home`}
//                   className="wd-dashboard-course-link text-decoration-none text-dark"
//                 >
//                   <img src={course.image} alt={course.name} width="100%" height={160} />
//                   <div className="card-body">
//                     <h5 className="card-title">{course.name}</h5>
//                     <p className="card-text" style={{ maxHeight: 100, overflowY: "hidden" }}>
//                       {course.description}
//                     </p>
//                     <button className="btn btn-primary">Go</button>

//                     {isFaculty && (
//                       <>
//                         <button
//                           onClick={(e) => {
//                             e.preventDefault();
//                             deleteCourse(course._id);
//                           }}
//                           className="btn btn-danger float-end"
//                         >
//                           Delete
//                         </button>
//                         <button
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setCourse(course);
//                           }}
//                           className="btn btn-warning me-2 float-end"
//                         >
//                           Edit
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }











import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import coursesDB from "./Database";
import {
  setEnrollments,
  enroll,
  unenroll,
} from "./Courses/Enrollments/reducer";
import * as enrollmentClient from "./Courses/Enrollments/client";

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
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (isStudent && currentUser?._id) {
        const data = await enrollmentClient.findEnrollmentsForUser(currentUser._id);
        dispatch(setEnrollments(data));
      }
    };
    fetchEnrollments();
  }, [currentUser]);

  const handleEnrollment = async (courseId: string) => {
    const isEnrolled = enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === courseId
    );

    if (isEnrolled) {
      await enrollmentClient.unenroll(currentUser._id, courseId);
      dispatch(unenroll({ userId: currentUser._id, courseId }));
    } else {
      const newEnrollment = await enrollmentClient.enroll(currentUser._id, courseId);
      dispatch(enroll(newEnrollment));
    }
  };

  // const visibleCourses = isStudent
  //   ? showAllCourses
  //     ? courses
  //     : courses.filter((course) =>
  //         enrollments.some(
  //           (e: any) => e.user === currentUser._id && e.course === course._id
  //         )
  //       )
  //   : courses;
  const visibleCourses = isStudent
  ? showAllCourses
    ? coursesDB.courses
    : coursesDB.courses.filter((course) =>
        enrollments.some(
          (e: any) => e.user === currentUser._id && e.course === course._id
        )
      )
  : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Update
            </button>
          </h5>
          <br />
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

      {isStudent && (
        <button
          className="btn btn-info float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {visibleCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (e: any) =>
                e.user === currentUser._id && e.course === course._id
            );

            return (
              <div key={course._id} className="col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={course.image}
                      alt={course.name}
                      width="100%"
                      height={160}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.name}</h5>
                      <p
                        className="card-text"
                        style={{ maxHeight: 100, overflowY: "hidden" }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>

                      {isFaculty && (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                          >
                            Delete
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
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
                          className={`btn float-end ${
                            isEnrolled ? "btn-danger" : "btn-success"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
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