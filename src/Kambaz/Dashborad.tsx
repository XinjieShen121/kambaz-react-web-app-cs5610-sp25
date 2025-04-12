// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// // import coursesDB from "./Database";
// import {
//   setEnrollments,
//   enroll,
//   unenroll,
// } from "./Courses/Enrollments/reducer";
// import * as enrollmentClient from "./Courses/Enrollments/client";

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
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   console.log("🔍 currentUser:", currentUser);

//   const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

//   const isFaculty = currentUser?.role === "FACULTY";
//   const isStudent = currentUser?.role === "STUDENT";

//   const [showAllCourses, setShowAllCourses] = useState(false);

//   useEffect(() => {
//     const fetchEnrollments = async () => {
//       if (isStudent && currentUser?._id) {
//         const data = await enrollmentClient.findEnrollmentsForUser(
//           currentUser._id
//         );
//         dispatch(setEnrollments(data));
//       }
//     };
//     fetchEnrollments();
//   }, [currentUser]);

//   const handleEnrollment = async (courseId: string) => {
//     const isEnrolled = enrollments.some(
//       (e: any) => e.user === currentUser._id && e.course === courseId
//     );

//     if (isEnrolled) {
//       await enrollmentClient.unenroll(currentUser._id, courseId);
//       dispatch(unenroll({ userId: currentUser._id, courseId }));
//     } else {
//       const newEnrollment = await enrollmentClient.enroll(
//         currentUser._id,
//         courseId
//       );
//       dispatch(enroll(newEnrollment));
//     }
//   };

//   // const visibleCourses = isStudent
//   //   ? showAllCourses
//   //     ? coursesDB.courses
//   //     : coursesDB.courses.filter((course) =>
//   //         enrollments.some(
//   //           (e: any) => e.user === currentUser._id && e.course === course._id
//   //         )
//   //       )
//   //   : courses;

//   // const visibleCourses = isStudent
//   // ? showAllCourses
//   //   ? courses
//   //   : courses.filter((course) =>
//   //       enrollments.some(
//   //         (e: any) => e.user === currentUser._id && e.course === course._id
//   //       )
//   //     )
//   // : courses;

//   const visibleCourses = isFaculty
//   ? courses.filter((course) => course.faculty === currentUser._id)
//   : isStudent
//     ? showAllCourses
//       ? courses
//       : courses.filter((course) =>
//           enrollments.some(
//             (e: any) => e.user === currentUser._id && e.course === course._id
//           )
//         )
//     : courses;

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {isFaculty && (
//         <>
//           <h5>
//             New Course
//             <button
//               className="btn btn-primary float-end"
//               onClick={addNewCourse}
//             >
//               Add
//             </button>
//             <button
//               className="btn btn-warning float-end me-2"
//               onClick={updateCourse}
//             >
//               Update
//             </button>
//           </h5>
//           <br />
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) =>
//               setCourse({ ...course, description: e.target.value })
//             }
//           />
//         </>
//       )}

//       {isStudent && (
//         <button
//           className="btn btn-info float-end mb-3"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//         >
//           {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
//         </button>
//       )}

//       <h2 id="wd-dashboard-published">
//         Published Courses ({visibleCourses.length})
//       </h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {visibleCourses.map((course) => {
//             const isEnrolled = enrollments.some(
//               (e: any) => e.user === currentUser._id && e.course === course._id
//             );

//             return (
//               <div key={course._id} className="col" style={{ width: "300px" }}>
//                 <div className="card rounded-3 overflow-hidden">
//                   <Link
//                     to={`/Kambaz/Courses/${course._id}/Home`}
//                     className="text-decoration-none text-dark"
//                   >
//                     <img
//                       src={course.image}
//                       alt={course.name}
//                       width="100%"
//                       height={160}
//                       style={{ objectFit: "cover" }}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{course.name}</h5>
//                       <p
//                         className="card-text"
//                         style={{ maxHeight: 100, overflowY: "hidden" }}
//                       >
//                         {course.description}
//                       </p>
//                       <button className="btn btn-primary">Go</button>

//                       {isFaculty && (
//                         <>
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
//                               deleteCourse(course._id);
//                             }}
//                             className="btn btn-danger float-end"
//                           >
//                             Delete
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
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
//                           className={`btn float-end ${
//                             isEnrolled ? "btn-danger" : "btn-success"
//                           }`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleEnrollment(course._id);
//                           }}
//                         >
//                           {isEnrolled ? "Unenroll" : "Enroll"}
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




// not working after modify
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   setEnrollments,
//   enroll,
//   unenroll,
// } from "./Courses/Enrollments/reducer";
// import * as enrollmentClient from "./Courses/Enrollments/client";



// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   enrolling,
//   setEnrolling,
//   updateEnrollment,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
//   enrolling: boolean;
//   setEnrolling: (enrolling: boolean) => void;
//   updateEnrollment: (courseId: string, enrolled: boolean) => void;
// }) {
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   // ✅ Add this guard clause!
// if (!currentUser) {
//   return <div>Loading...</div>;
// }
//   const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);


//   const isFaculty = currentUser?.role === "FACULTY";
//   const isStudent = currentUser?.role === "STUDENT";

//   const [showAllCourses, setShowAllCourses] = useState(false);

//   // useEffect(() => {
//   //   const fetchEnrollments = async () => {
//   //     if (isStudent && currentUser?._id) {
//   //       const data = await enrollmentClient.findEnrollmentsForUser(currentUser._id);
//   //       dispatch(setEnrollments(data));
//   //     }
//   //   };
//   //   fetchEnrollments();
//   // }, [currentUser]);

//   // no longer necessary
//   // useEffect(() => {
//   //   const fetchEnrollments = async () => {
//   //     if ((isStudent || isFaculty) && currentUser?._id) {
//   //       const data = await enrollmentClient.findEnrollmentsForUser(
//   //         currentUser._id
//   //       );
//   //       dispatch(setEnrollments(data));
//   //     }
//   //   };
//   //   fetchEnrollments();
//   // }, [currentUser]);

//   // nolong necessary
//   // const handleEnrollment = async (courseId: string) => {
//   //   const isEnrolled = enrollments.some(
//   //     (e: any) => e.user === currentUser._id && e.course === courseId
//   //   );

//   //   if (isEnrolled) {
//   //     await enrollmentClient.unenroll(currentUser._id, courseId);
//   //     dispatch(unenroll({ userId: currentUser._id, courseId }));
//   //   } else {
//   //     const newEnrollment = await enrollmentClient.enroll(
//   //       currentUser._id,
//   //       courseId
//   //     );
//   //     dispatch(enroll(newEnrollment));
//   //   }
//   // };

//   // console.log("💡 currentUser._id:", currentUser?._id);
//   // console.log("📚 courses:", courses);

//   // console.log("🧑‍🏫 Faculty ID:", currentUser?._id);
//   // console.log("📚 Course authors:", courses.map((c) => ({ id: c._id, author: c.author })));

//   // console.log("🧾 Enrollments:", enrollments);

//   // const visibleCourses = isStudent
//   // ? showAllCourses
//   //   ? courses
//   //   : courses.filter((course) =>
//   //       enrollments.some(
//   //         (e: any) => e.user === currentUser._id && e.course === course._id
//   //       )
//   //     )
//   // : courses; // default: faculty or admin

//   // const visibleCourses =
//   // (isFaculty || isStudent)
//   //   ? showAllCourses
//   //     ? courses
//   //     : courses.filter((course) =>
//   //         enrollments.some(
//   //           (e: any) =>
//   //             e.user === currentUser._id && e.course === course._id
//   //         )
//   //       )
//   //   : courses;


  
//   const visibleCourses =
//     isStudent || isFaculty
//       ? showAllCourses
//         ? courses
//         : courses.filter((course) =>
//             enrollments.some(
//               (e: any) =>
//                 String(e.user) === String(currentUser._id) &&
//                 String(e.course) === String(course._id)
//             )
//           )
//       : courses;

//   // const visibleCourses = courses;
//   // console.log("💡 visibleCourses:", visibleCourses);

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">
//         Dashboard
//         <button
//           onClick={() => setEnrolling(!enrolling)}
//           className="float-end btn btn-primary"
//         >
//           {enrolling ? "My Courses" : "All Courses"}
//         </button>
//       </h1>
//       <hr />

//       {isFaculty && (
//         <>
//           <h5>
//             New Course
//             <button
//               className="btn btn-primary float-end"
//               onClick={addNewCourse}
//             >
//               Add
//             </button>
//             <button
//               className="btn btn-warning float-end me-2"
//               onClick={updateCourse}
//             >
//               Update
//             </button>
//           </h5>
//           <br />
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) =>
//               setCourse({ ...course, description: e.target.value })
//             }
//           />
//         </>
//       )}

//      {/* remove preivous show all button */}
//       {/* {isStudent && (
//         <button
//           className="btn btn-info float-end mb-3"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//         >
//           {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
//         </button>
//       )} */}

//       <h2 id="wd-dashboard-published">
//         Published Courses ({visibleCourses.length})
//       </h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {visibleCourses.map((course) => {
           

//             const isEnrolled = enrollments.some(
//               (e: any) => e.user === currentUser._id && e.course === course._id
//             );

          
         
//             return (
//               <div key={course._id} className="col" style={{ width: "300px" }}>
//                 <div className="card rounded-3 overflow-hidden">
//                   <Link
//                     to={`/Kambaz/Courses/${course._id}/Home`}
//                     className="text-decoration-none text-dark"
//                   >
//                     <img
//                       src={course.image}
//                       alt={course.name}
//                       width="100%"
//                       height={160}
//                       style={{ objectFit: "cover" }}
//                     />
//                     <div className="card-body">
//                       {/* <h5 className="card-title"> */}
//                       <h5 className="wd-dashboard-course-title card-title">
//                         {/* {enrolling && (
// <button className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
// {course.enrolled ? "Unenroll" : "Enroll"}
// </button>
// )} */}
//                         {enrolling && (
//                           <button
//                             onClick={(event) => {
//                               event.preventDefault();
//                               updateEnrollment(course._id, !course.enrolled);
//                             }}
//                             className={`btn ${
//                               course.enrolled ? "btn-danger" : "btn-success"
//                             } float-end`}
//                           >
//                             {course.enrolled ? "Unenroll" : "Enroll"}
//                           </button>
//                         )}

//                         {course.name}
//                       </h5>
//                       <p
//                         className="card-text"
//                         style={{ maxHeight: 100, overflowY: "hidden" }}
//                       >
//                         {course.description}
//                       </p>
//                       <button className="btn btn-primary">Go</button>

//                       {isFaculty && (
//                         <>
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
//                               deleteCourse(course._id);
//                             }}
//                             className="btn btn-danger float-end"
//                           >
//                             Delete
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
//                               setCourse(course);
//                             }}
//                             className="btn btn-warning me-2 float-end"
//                           >
//                             Edit
//                           </button>
//                         </>
//                       )}

//                       {/* old button no longer necessary */}
//                       {/* {isStudent && (
//                         <button
//                           className={`btn float-end ${
//                             isEnrolled ? "btn-danger" : "btn-success"
//                           }`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleEnrollment(course._id);
//                           }}
//                         >
//                           {isEnrolled ? "Unenroll" : "Enroll"}
//                         </button>
//                       )} */}
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




// previous working code

// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   setEnrollments,
//   enroll,
//   unenroll,
// } from "./Courses/Enrollments/reducer";
// import * as enrollmentClient from "./Courses/Enrollments/client";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   enrolling,
//   setEnrolling,
//   updateEnrollment,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
//   enrolling: boolean;
//   setEnrolling: (enrolling: boolean) => void;
//   updateEnrollment: (courseId: string, enrolled: boolean) => void;
// }) {
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

//   const isFaculty = currentUser?.role === "FACULTY";
//   const isStudent = currentUser?.role === "STUDENT";

//   const [showAllCourses, setShowAllCourses] = useState(false);

//   // useEffect(() => {
//   //   const fetchEnrollments = async () => {
//   //     if (isStudent && currentUser?._id) {
//   //       const data = await enrollmentClient.findEnrollmentsForUser(currentUser._id);
//   //       dispatch(setEnrollments(data));
//   //     }
//   //   };
//   //   fetchEnrollments();
//   // }, [currentUser]);

//   // useEffect(() => {
//   //   const fetchEnrollments = async () => {
//   //     if ((isStudent || isFaculty) && currentUser?._id) {
//   //       const data = await enrollmentClient.findEnrollmentsForUser(
//   //         currentUser._id
//   //       );
//   //       dispatch(setEnrollments(data));
//   //     }
//   //   };
//   //   fetchEnrollments();
//   // }, [currentUser]);

//   const handleEnrollment = async (courseId: string) => {
//     const isEnrolled = enrollments.some(
//       (e: any) => e.user === currentUser._id && e.course === courseId
//     );

//     if (isEnrolled) {
//       await enrollmentClient.unenroll(currentUser._id, courseId);
//       dispatch(unenroll({ userId: currentUser._id, courseId }));
//     } else {
//       const newEnrollment = await enrollmentClient.enroll(
//         currentUser._id,
//         courseId
//       );
//       dispatch(enroll(newEnrollment));
//     }
//   };

//   // console.log("💡 currentUser._id:", currentUser?._id);
//   // console.log("📚 courses:", courses);

//   // console.log("🧑‍🏫 Faculty ID:", currentUser?._id);
//   // console.log("📚 Course authors:", courses.map((c) => ({ id: c._id, author: c.author })));

//   // console.log("🧾 Enrollments:", enrollments);

//   // const visibleCourses = isStudent
//   // ? showAllCourses
//   //   ? courses
//   //   : courses.filter((course) =>
//   //       enrollments.some(
//   //         (e: any) => e.user === currentUser._id && e.course === course._id
//   //       )
//   //     )
//   // : courses; // default: faculty or admin

//   // const visibleCourses =
//   // (isFaculty || isStudent)
//   //   ? showAllCourses
//   //     ? courses
//   //     : courses.filter((course) =>
//   //         enrollments.some(
//   //           (e: any) =>
//   //             e.user === currentUser._id && e.course === course._id
//   //         )
//   //       )
//   //   : courses;


//   // previous working one 
//   // const visibleCourses =
//   //   isStudent || isFaculty
//   //     ? showAllCourses
//   //       ? courses
//   //       : courses.filter((course) =>
//   //           enrollments.some(
//   //             (e: any) =>
//   //               String(e.user) === String(currentUser._id) &&
//   //               String(e.course) === String(course._id)
//   //           )
//   //         )
//   //     : courses;
//   const visibleCourses = courses;
//   console.log("🧪 visibleCourses:", visibleCourses)

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">
//         Dashboard
//         <button
//           onClick={() => setEnrolling(!enrolling)}
//           className="float-end btn btn-primary"
//         >
//           {enrolling ? "My Courses" : "All Courses"}
//         </button>
//       </h1>
//       <hr />

//       {isFaculty && (
//         <>
//           <h5>
//             New Course
//             <button
//               className="btn btn-primary float-end"
//               onClick={addNewCourse}
//             >
//               Add
//             </button>
//             <button
//               className="btn btn-warning float-end me-2"
//               onClick={updateCourse}
//             >
//               Update
//             </button>
//           </h5>
//           <br />
//           <input
//             value={course.name}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className="form-control"
//             onChange={(e) =>
//               setCourse({ ...course, description: e.target.value })
//             }
//           />
//         </>
//       )}

//      {/* remove preivous show all button */}
//       {/* {isStudent && (
//         <button
//           className="btn btn-info float-end mb-3"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//         >
//           {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
//         </button>
//       )} */}

//       <h2 id="wd-dashboard-published">
//         Published Courses ({visibleCourses.length})
//       </h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {visibleCourses.map((course) => {
            
//             if (!course || !course._id) {
//               return null; // ⛑️ skip bad course data
//             }
          

//             const isEnrolled = enrollments.some(
//               (e: any) => e.user === currentUser._id && e.course === course._id
//             );

//             return (
//               <div key={course._id} className="col" style={{ width: "300px" }}>
//                 <div className="card rounded-3 overflow-hidden">
//                   <Link
//                     to={`/Kambaz/Courses/${course._id}/Home`}
//                     className="text-decoration-none text-dark"
//                   >
//                     <img
//                       src={course.image}
//                       alt={course.name}
//                       width="100%"
//                       height={160}
//                       style={{ objectFit: "cover" }}
//                     />
//                     <div className="card-body">
//                       {/* <h5 className="card-title"> */}
//                       <h5 className="wd-dashboard-course-title card-title">
//                         {/* {enrolling && (
// <button className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
// {course.enrolled ? "Unenroll" : "Enroll"}
// </button>
// )} */}
//                         {enrolling && (
//                           <button
//                             onClick={(event) => {
//                               event.preventDefault();
//                               updateEnrollment(course._id, !course.enrolled);
//                             }}
//                             className={`btn ${
//                               course.enrolled ? "btn-danger" : "btn-success"
//                             } float-end`}
//                           >
//                             {course.enrolled ? "Unenroll" : "Enroll"}
//                           </button>
//                         )}

//                         {course.name}
//                       </h5>
//                       <p
//                         className="card-text"
//                         style={{ maxHeight: 100, overflowY: "hidden" }}
//                       >
//                         {course.description}
//                       </p>
//                       <button className="btn btn-primary">Go</button>

//                       {isFaculty && (
//                         <>
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
//                               deleteCourse(course._id);
//                             }}
//                             className="btn btn-danger float-end"
//                           >
//                             Delete
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
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
//                           className={`btn float-end ${
//                             isEnrolled ? "btn-danger" : "btn-success"
//                           }`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleEnrollment(course._id);
//                           }}
//                         >
//                           {isEnrolled ? "Unenroll" : "Enroll"}
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


import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  console.log("📚 courses array (raw):", courses);
console.log("🧑‍🎓 currentUser:", currentUser);
  const visibleCourses = courses.filter((c) => !!c && !!c._id);
  // const visibleCourses = courses
  // .filter((c) => !!c && !!c._id && c.name !== "New Course" && c.name !== "New Course123");

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {visibleCourses.map((course) => (
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
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${
                            course.enrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {course.name}
                    </h5>
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
                        {/* <button
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button> */}


{/* Make sure setCourse(course) gives the full valid course object */}
                        <button
  onClick={(e) => {
    e.preventDefault();
    if (course && course._id) {
      setCourse({ ...course });  // copy the full object
    } else {
      console.warn("⚠️ Course missing _id:", course);
    }
  }}
  className="btn btn-warning me-2 float-end"
>
  Edit
</button>
                      </>
                    )}
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