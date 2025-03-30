
// import { FaPlus, FaSearch } from "react-icons/fa";
// import { BsGripVertical, BsPlus } from "react-icons/bs";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { HiOutlineDocumentText } from "react-icons/hi";
// import { useParams, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteAssignment } from "./reducer"; // Import delete function
// import * as assignmentClient from "./client";

// export default function Assignments() {
//   const { cid } = useParams(); // Get course ID from URL
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const dispatch = useDispatch();
  

//   const courseAssignments = assignments.filter((a: any) => a.course === cid);

//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser?.role === "FACULTY"; //  Define isFaculty

//   return (
//     <div id="wd-assignments" className="container mt-5 ms-5">
//       {/* Controls */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div className="input-group w-50" >
//           <span className="input-group-text bg-white border-end-0">
//             <FaSearch className="text-muted fs-5" />
//           </span>
//           <input
//             placeholder="Search for Assignments"
//             id="wd-search-assignment"
//             className="form-control border-start-0 fs-6"
//             style={{ flexGrow: 1, paddingLeft: "10px" }}
        
            
      
//           />
//         </div>
//         <div className="float-end">
//         {isFaculty && ( //  Only show for faculty
//           <Link to={`/Kambaz/Courses/${cid}/Assignments/New`} className="btn btn-danger fs-5">
//             <FaPlus className="me-1" /> Assignment
//           </Link>
//           )}
//         </div>
//       </div>

//       {/* Assignment List */}
//       <ul id="wd-assignments-list" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
//             <div className="d-flex align-items-center fw-bold fs-3">
//               <BsGripVertical className="me-2 fs-4" />
//               Assignments
//             </div>
//             <div className="d-flex align-items-center gap-3">
//               <span className="text-muted">40% of Total</span>
//               <BsPlus className="fs-4" />
//               <IoEllipsisVertical className="fs-4" />
//             </div>
//           </div>

//           {/* Dynamic Assignments List */}
//           <ul className="wd-lessons list-group rounded-0">
//             {courseAssignments.map((assignment: any) => (
//               <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
//                 <div className="d-flex align-items-center">
//                   <BsGripVertical className="me-2 fs-3" />
//                   <HiOutlineDocumentText className="text-success me-2 fs-5" />
//                   <Link
//                     to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
//                     className="wd-assignment-link fw-bold fs-4 text-dark"
//                   >
//                     {assignment.title}
//                   </Link>
//                 </div>
//                 {isFaculty && ( //  Only faculty can delete assignments
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => {
//                     if (window.confirm("Are you sure you want to delete this assignment?")) {
//                       dispatch(deleteAssignment(assignment._id));
//                     }
//                   }}
//                 >
//                   Delete
//                 </button>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments } from "./reducer";
import * as client from "./client";
//import { deleteAssignment } from "./reducer";
import { FaPlus, FaSearch } from "react-icons/fa";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const fetchAssignments = async () => {
    const data = await client.findAssignmentsForCourse(cid!);
    dispatch(setAssignments(data));
  };

  useEffect(() => {
    if (cid) fetchAssignments();
  }, [cid]);

  const handleDelete = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    fetchAssignments(); // reload after delete
  };

  return (
    <div className="container mt-5 ms-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch className="text-muted fs-5" />
          </span>
          <input
            placeholder="Search for Assignments"
            className="form-control border-start-0 fs-6"
          />
        </div>
        {isFaculty && (
          <Link to={`/Kambaz/Courses/${cid}/Assignments/New`} className="btn btn-danger fs-5">
            <FaPlus className="me-1" /> Assignment
          </Link>
        )}
      </div>

      <ul className="list-group rounded-0">
        <li className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
            <div className="d-flex align-items-center fw-bold fs-3">
              <BsGripVertical className="me-2 fs-4" />
              Assignments
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="text-muted">40% of Total</span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul className="list-group rounded-0">
            {assignments.map((a: any) => (
              <li key={a._id} className="list-group-item p-3 ps-1 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <HiOutlineDocumentText className="text-success me-2 fs-5" />
                  <Link to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`} className="fw-bold fs-4 text-dark">
                    {a.title}
                  </Link>
                </div>
                {isFaculty && (
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(a._id)}>
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}