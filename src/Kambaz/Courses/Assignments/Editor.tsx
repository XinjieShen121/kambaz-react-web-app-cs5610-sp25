
// import { FaChevronDown } from "react-icons/fa";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { addAssignment, updateAssignment } from "./reducer"; // Import Redux actions

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams(); // Get course ID and assignment ID from URL
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser?.role === "FACULTY";

//   // Find existing assignment or create a new one
//   const existingAssignment = assignments.find((a: any) => a._id === aid);
//   const [assignment, setAssignment] = useState(
//     existingAssignment || {
//       _id: Date.now().toString(), // Generate a unique ID
//       title: "",
//       description: "",
//       points: 100,
//       course: cid,
//       dueDate: "",
//       availableFrom: "",
//       availableUntil: "",
//       submissionType: "Online",
//     }
//   );

//   // Handle changes in form fields
//   const handleChange = (field: string, value: any) => {
//     setAssignment({ ...assignment, [field]: value });
//   };

//   // Save function: Adds or updates assignment
//   const handleSave = () => {
//     if (existingAssignment) {
//       dispatch(updateAssignment(assignment));
//     } else {
//       dispatch(addAssignment(assignment));
//     }
//     navigate(`/Kambaz/Courses/${cid}/Assignments`); // Go back after save
//   };

//   return isFaculty ? (
//     <div id="wd-assignments-editor" className="container mt-4 ms-5 p-4" style={{ maxWidth: "960px" }}>
//       {/* Assignment Name */}
//       <div className="row mb-4">
//         <div className="col-12">
//           <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
//         </div>
//         <div className="col-12">
//         {isFaculty ? (
//           <input
//             id="wd-name"
//             value={assignment.title}
//             className="form-control"
//             onChange={(e) => handleChange("title", e.target.value)}
//           />
//           ) : (
//             <p>{assignment.title}</p> //  Students see read-only assignment name
//           )}
//           </div>
//       </div>

//       {/* Description */}
//       <div className="row mb-4">
//         <div className="col-12">
//           <textarea
//             id="wd-description"
//             className="form-control"
//             placeholder="Enter the assignment description..."
//             cols={70}
//             rows={8}
//             value={assignment.description}
//             onChange={(e) => handleChange("description", e.target.value)}
//           ></textarea>
//         </div>
//       </div>

//       {/* Points */}
//       <div className="row mb-4">
//         <div className="col-3 text-end">
//           <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
//         </div>
//         <div className="col-9">
//           <input
//             id="wd-points"
//             type="number"
//             value={assignment.points}
//             className="form-control"
//             onChange={(e) => handleChange("points", Number(e.target.value))}
//           />
//         </div>
//       </div>

//       {/* Assignment Group */}
//       <div className="row mb-4 position-relative">
//         <div className="col-3 text-end">
//           <label htmlFor="wd-group" className="form-label fw-bold">Assignment Group</label>
//         </div>
//         <div className="col-9 position-relative">
//           <select id="wd-group" className="form-control">
//             <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             <option value="READING">READING</option>
//             <option value="PROJECTS">PROJECTS</option>
//             <option value="EXAMS">EXAMS</option>
//           </select>
//           <FaChevronDown className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
//         </div>
//       </div>

//       {/* Submission Type */}
//       <div className="row mb-4 position-relative">
//         <div className="col-3 text-end">
//           <label htmlFor="wd-submission-type" className="form-label fw-bold">Submission Type</label>
//         </div>
//         <div className="col-9 position-relative">
//           <select
//             id="wd-submission-type"
//             className="form-control mb-3"
//             value={assignment.submissionType}
//             onChange={(e) => handleChange("submissionType", e.target.value)}
//           >
//             <option value="Online">Online</option>
//             <option value="No Submission">No Submission</option>
//             <option value="On Paper">On Paper</option>
//             <option value="External Tool">External Tool</option>
//           </select>
//           <FaChevronDown className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
//         </div>
//       </div>

//       {/* Assign Section */}
//       <div className="row mb-4 position-relative">
//         <div className="col-3 text-end">
//           <label className="form-label fw-bold">Assign</label>
//         </div>
//         <div className="col-9 position-relative border p-3 rounded">
//           {/* Due Date */}
//           <div className="mb-3">
//             <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
//             <input
//               type="date"
//               id="wd-due-date"
//               className="form-control"
//               value={assignment.dueDate}
//               onChange={(e) => handleChange("dueDate", e.target.value)}
//             />
//           </div>

//           {/* Available from and Until */}
//           <div className="row mb-3">
//             <div className="col-6 text-start">
//               <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
//             </div>
//             <div className="col-6 text-start">
//               <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-6">
//               <input
//                 type="date"
//                 id="wd-available-from"
//                 className="form-control"
//                 value={assignment.availableFrom}
//                 onChange={(e) => handleChange("availableFrom", e.target.value)}
//               />
//             </div>
//             <div className="col-6">
//               <input
//                 type="date"
//                 id="wd-available-until"
//                 className="form-control"
//                 value={assignment.availableUntil}
//                 onChange={(e) => handleChange("availableUntil", e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       {isFaculty && (
//       <div className="d-flex justify-content-end mt-4">
//         <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
//         <button onClick={handleSave} className="btn btn-danger">Save</button>
//       </div>
//       )}
//     </div>
//   ) : null;
// }





// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// // import { useState, useEffect } from "react";
// import { useState } from "react";
// import * as client from "./client";
// import { setAssignments } from "./reducer";

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser?.role === "FACULTY";

//   const existing = assignments.find((a: any) => a._id === aid);
//   const [assignment, setAssignment] = useState(
//     existing || {
//       title: "",
//       description: "",
//       points: 100,
//       course: cid,
//       dueDate: "",
//       availableFrom: "",
//       availableUntil: "",
//       submissionType: "Online",
//     }
//   );

//   const handleSave = async () => {
//     if (!cid) return;
//     if (existing) {
//       await client.updateAssignment(assignment);
//     } else {
//       await client.createAssignment(cid, assignment);
//     }
//     const updated = await client.findAssignmentsForCourse(cid);
//     dispatch(setAssignments(updated));
//     navigate(`/Kambaz/Courses/${cid}/Assignments`);
//   };

//   return isFaculty ? (
//     <div className="container mt-4 ms-5 p-4" style={{ maxWidth: "960px" }}>
//       <div className="mb-4">
//         <label className="form-label fw-bold">Assignment Name</label>
//         <input
//           value={assignment.title}
//           className="form-control"
//           onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
//         />
//       </div>

//       <textarea
//         className="form-control mb-4"
//         rows={6}
//         placeholder="Enter description"
//         value={assignment.description}
//         onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
//       ></textarea>

//       <div className="mb-4">
//         <label className="form-label fw-bold">Points</label>
//         <input
//           type="number"
//           className="form-control"
//           value={assignment.points}
//           onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
//         />
//       </div>

//       <div className="row mb-4">
//         <div className="col">
//           <label className="form-label fw-bold">Due Date</label>
//           <input
//             type="date"
//             className="form-control"
//             value={assignment.dueDate}
//             onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
//           />
//         </div>
//         <div className="col">
//           <label className="form-label fw-bold">Available From</label>
//           <input
//             type="date"
//             className="form-control"
//             value={assignment.availableFrom}
//             onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
//           />
//         </div>
//         <div className="col">
//           <label className="form-label fw-bold">Available Until</label>
//           <input
//             type="date"
//             className="form-control"
//             value={assignment.availableUntil}
//             onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
//           />
//         </div>
//       </div>

//       <div className="d-flex justify-content-end">
//         <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
//         <button onClick={handleSave} className="btn btn-danger">Save</button>
//       </div>
//     </div>
//   ) : null;
// }






import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as client from "./client";
import { setAssignments } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const existing = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 100,
    course: cid,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    submissionType: "Online",
  });

  useEffect(() => {
    const loadAssignment = async () => {
      if (aid && assignments.length === 0 && cid) {
        const loadedAssignments = await client.findAssignmentsForCourse(cid);
        dispatch(setAssignments(loadedAssignments));
      }

      const existing = assignments.find((a: any) => a._id === aid);
      if (existing) {
        setAssignment(existing);
      }
    };

    loadAssignment();
  }, [aid, assignments, cid, dispatch]);

  // const handleSave = async () => {
  //   if (!cid) return;
  //   if (aid) {
  //     await client.updateAssignment(assignment);
  //   } else {
  //     await client.createAssignment(cid, assignment);
  //   }
  //   const updated = await client.findAssignmentsForCourse(cid);
  //   dispatch(setAssignments(updated));
  //   navigate(`/Kambaz/Courses/${cid}/Assignments`);
  // };

  // const handleSave = async () => {
  //   if (!cid) return;
  //   let updatedAssignment;
  
  //   if (existing) {
  //     updatedAssignment = await client.updateAssignment(assignment);
  //   } else {
  //     updatedAssignment = await client.createAssignment(cid, assignment); // ✅ capture new assignment
  //   }
  
  //   const refreshed = await client.findAssignmentsForCourse(cid);
  //   dispatch(setAssignments(refreshed));
  //   navigate(`/Kambaz/Courses/${cid}/Assignments`);
  // };

  const handleSave = async () => {
    if (!cid) return;
  
    if (existing) {
      await client.updateAssignment(assignment);
    } else {
      await client.createAssignment(cid, assignment); // ✅ create directly
    }
  
    const refreshed = await client.findAssignmentsForCourse(cid);
    dispatch(setAssignments(refreshed));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return isFaculty ? (
    <div className="container mt-4 ms-5 p-4" style={{ maxWidth: "960px" }}>
      <div className="mb-4">
        <label className="form-label fw-bold">Assignment Name</label>
        <input
          value={assignment.title}
          className="form-control"
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>

      <textarea
        className="form-control mb-4"
        rows={6}
        placeholder="Enter description"
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      ></textarea>

      <div className="mb-4">
        <label className="form-label fw-bold">Points</label>
        <input
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
        />
      </div>

      <div className="row mb-4">
        <div className="col">
          <label className="form-label fw-bold">Due Date</label>
          <input
            type="date"
            className="form-control"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </div>
        <div className="col">
          <label className="form-label fw-bold">Available From</label>
          <input
            type="date"
            className="form-control"
            value={assignment.availableFrom}
            onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
          />
        </div>
        <div className="col">
          <label className="form-label fw-bold">Available Until</label>
          <input
            type="date"
            className="form-control"
            value={assignment.availableUntil}
            onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  ) : null;
}
