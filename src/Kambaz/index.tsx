// import "./styles.css";
// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashborad";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// //import * as db from "./Database";
// import { useEffect, useState } from "react";
// //import { v4 as uuidv4 } from "uuid";
// import ProtectedRoute from "./Account/ProtectedRoute";
// import Session from "./Account/Session";
// //import * as client from "./Courses/client";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";

// import { useSelector } from "react-redux";

// import { useDispatch } from "react-redux";
// import { enroll } from "./Courses/Enrollments/reducer";
// import * as enrollmentClient from "./Courses/Enrollments/client";

// export default function Kambaz() {
//   // const [courses, setCourses] = useState<any[]>(db.courses);
//   const [courses, setCourses] = useState<any[]>([]);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   const [enrolling, setEnrolling] = useState<boolean>(false);

//   const findCoursesForUser = async () => {
//     try {
//       const courses = await userClient.findCoursesForUser(currentUser._id);
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const fetchCourses = async () => {
//     try {
//       const allCourses = await courseClient.fetchAllCourses();
//       const enrolledCourses = await userClient.findCoursesForUser(
//         currentUser._id
//       );
//       const courses = allCourses.map((course: any) => {
//         if (enrolledCourses.find((c: any) => c._id === course._id)) {
//           return { ...course, enrolled: true };
//         } else {
//           return course;
//         }
//       });
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // const fetchCourses = async () => {
//   //   try {
//   //     const courses = await courseClient.fetchAllCourses();
//   //     setCourses(courses);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   fetchCourses();
//   // }, [currentUser]);

//   useEffect(() => {
//     if (enrolling) {
//       fetchCourses();
//     } else {
//       findCoursesForUser();
//     }
//   }, [currentUser, enrolling]);

//   const updateEnrollment = async (courseId: string, enrolled: boolean) => {
//     if (enrolled) {
//     await userClient.enrollIntoCourse(currentUser._id, courseId);
//     } else {
//     await userClient.unenrollFromCourse(currentUser._id, courseId);
//     }
//     setCourses(
//     courses.map((course) => {
//     if (course._id === courseId) {
//     return { ...course, enrolled: enrolled };
//     } else {
//     return course;
//     }
//     })
//     );
//     };




//   const [course, setCourse] = useState<any>({
//     _id: "1234",
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     description: "New Description",
//   });

//   // const [showAllCourses, setShowAllCourses] = useState(true);

//   // const addNewCourse = async () => {
//   //   // const newCourse = await userClient.createCourse(course);
//   //   const newCourse = await courseClient.createCourse(course);
//   //   setCourses([...courses, newCourse]);
//   //   setShowAllCourses(true);
//   // };

//   const dispatch = useDispatch();

//   const addNewCourse = async () => {
//     const courseToAdd = { ...course };
//     delete courseToAdd._id;

//     const newCourse = await courseClient.createCourse(courseToAdd);

//     // 👇 Automatically enroll the creator in their course
//     if (currentUser?._id) {
//       const newEnrollment = await enrollmentClient.enroll(
//         currentUser._id,
//         newCourse._id
//       );
//       dispatch(enroll(newEnrollment));
//     }

//     setCourses([...courses, newCourse]);
//   };

//   const deleteCourse = async (courseId: string) => {
//     const status = await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const updateCourse = async () => {
//     await courseClient.updateCourse(course);
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
//     <Session>
//       <div id="wd-kambaz">
//         <KambazNavigation />
//         <div className="wd-main-content-offset p-3">
//           <Routes>
//             <Route path="/" element={<Navigate to="Dashboard" />} />
//             <Route path="/Account/*" element={<Account />} />
//             <Route
//               path="/Dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard
//                     courses={courses}
//                     course={course}
//                     setCourse={setCourse}
//                     addNewCourse={addNewCourse}
//                     deleteCourse={deleteCourse}
//                     updateCourse={updateCourse}
//                     enrolling={enrolling}
//                     setEnrolling={setEnrolling}
//                     updateEnrollment={updateEnrollment}
//                   />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Courses/:cid/*"
//               element={
//                 <ProtectedRoute>
//                   <Courses courses={courses} />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/Calendar" element={<h1>Calendar</h1>} />
//             <Route path="/Inbox" element={<h1>Inbox</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Session>
//   );
// }


import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashborad";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";

import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useSelector } from "react-redux";

export default function Kambaz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  // // ✅ Add this helper at the top
const deduplicateById = (list: any[]) => {
  const seen = new Map();
  for (const item of list) {
    if (item && item._id && !seen.has(item._id)) {
      seen.set(item._id, item);
    }
  }
  return Array.from(seen.values());
};

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      // setCourses(courses);
      setCourses(deduplicateById(courses));
    } catch (error) {
      console.error(error);
    }
  
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const updatedCourses = allCourses.map((course: any) => {
        const enrolled = enrolledCourses.some((c: any) => c._id === course._id);
        return { ...course, enrolled };
      });
      // setCourses(updatedCourses);
      setCourses(deduplicateById(updatedCourses));
    } catch (error) {
      console.error(error);
    }
   
  };

  useEffect(() => {
    if (currentUser?._id) {
      enrolling ? fetchCourses() : findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    try {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }
      setCourses(
        courses.map((course) =>
          course._id === courseId ? { ...course, enrolled } : course
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  // const addNewCourse = async () => {
  //   const courseToAdd = { ...course };
  //   delete courseToAdd._id;
  //   const newCourse = await courseClient.createCourse(courseToAdd);
  //   setCourses([...courses, newCourse]);
    

  //   // optional
  //   setCourse(newCourse);
  // };

  // currently not render new added courses
  const addNewCourse = async () => {
    const courseToAdd = { ...course };
    delete courseToAdd._id;
  
    const newCourse = await courseClient.createCourse(courseToAdd);
  
    // Re-fetch latest list depending on student/faculty toggle
    enrolling ? await fetchCourses() : await findCoursesForUser();
  
    setCourse(newCourse); // Optional: reset form
  };

  const deleteCourse = async (courseId: string) => {
    if (!courseId) {
      console.warn("⚠️ No courseId passed to delete.");
      return;
    }

    await courseClient.deleteCourse(courseId);
    // setCourses(courses.filter((course) => course._id !== courseId));

     // Fix: filter out null/undefined courses to avoid crash
  setCourses(courses.filter((c) => !!c && c._id !== courseId));
  };

  const updateCourse = async () => {
    if (!course || !course._id) {
      console.warn("❗No course selected for update.");
      return;
    }

    // debug

  console.log("🧪 Current course before update:", course);

    await courseClient.updateCourse(course);
    // setCourses(
    //   courses.map((c) => (c._id === course._id ? course : c))
    // );
    // avoid cannot read properties
    setCourses(
      courses
        .filter((c) => !!c && !!c._id) // filter out bad/null data
        .map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />


          </Routes>
        </div>
      </div>
    </Session>
  );
}