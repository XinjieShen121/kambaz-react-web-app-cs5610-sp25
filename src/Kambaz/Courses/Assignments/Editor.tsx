// import { FaChevronDown } from "react-icons/fa";
// import { useParams, Link } from "react-router-dom";
// import * as db from "../../Database";
// import { useSelector } from "react-redux";

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams(); // Get course ID and assignment ID from URL
//   const assignment = db.assignments.find((a) => a._id === aid); // Find the correct assignment
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser?.role === "FACULTY";
//   return isFaculty ? (
//     <div
//       id="wd-assignments-editor"
//       className="container mt-4 ms-5 p-4"
//       style={{ maxWidth: "960px" }}
//     >
//       {/* Assignment Name */}
//       <div className="row mb-4">
//         <div className="col-12">
//           <label htmlFor="wd-name" className="form-label fw-bold">
//             Assignment Name
//           </label>
//         </div>
//         <div className="col-12">
//           <input
//             id="wd-name"
//             value={assignment ? assignment.title : ""}
//             className="form-control"
//             readOnly
//           />
//         </div>
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
//           ></textarea>
//         </div>
//       </div>

//       {/* Points */}
//       <div className="row mb-4">
//         <div className="col-3 text-end">
//           <label htmlFor="wd-points" className="form-label fw-bold">
//             Points
//           </label>
//         </div>
//         <div className="col-9">
//           <input id="wd-points" value="100" className="form-control" readOnly />
//         </div>
//       </div>

//       {/* Assignment Group */}
//       <div className="row mb-4 position-relative">
//         <div className="col-3 text-end">
//           <label htmlFor="wd-group" className="form-label fw-bold">
//             Assignment Group
//           </label>
//         </div>
//         <div className="col-9 position-relative">
//           <select id="wd-group" className="form-control">
//             <option value="ASSIGNMENTS" selected>
//               ASSIGNMENTS
//             </option>
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
//           <label htmlFor="wd-submission-type" className="form-label fw-bold">
//             Submission Type
//           </label>
//         </div>
//         <div className="col-9 position-relative">
//           <div className="border rounded p-3">
//             <div className="position-relative">
//               <select id="wd-submission-type" className="form-control mb-3">
//                 <option value="Online" selected>
//                   Online
//                 </option>
//                 <option value="No Submission">No Submission</option>
//                 <option value="On Paper">On Paper</option>
//                 <option value="External Tool">External Tool</option>
//               </select>
//               <FaChevronDown className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
//             </div>
//             <label className="form-label fw-bold">Online Entry Options</label>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 id="wd-text-entry"
//                 className="form-check-input"
//               />
//               <label htmlFor="wd-text-entry" className="form-check-label">
//                 Text Entry
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 id="wd-website-url"
//                 className="form-check-input"
//               />
//               <label htmlFor="wd-website-url" className="form-check-label">
//                 Website URL
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 id="wd-media-recordings"
//                 className="form-check-input"
//               />
//               <label htmlFor="wd-media-recordings" className="form-check-label">
//                 Media Recordings
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 id="wd-student-annotation"
//                 className="form-check-input"
//               />
//               <label
//                 htmlFor="wd-student-annotation"
//                 className="form-check-label"
//               >
//                 Student Annotation
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 id="wd-file-upload"
//                 className="form-check-input"
//               />
//               <label htmlFor="wd-file-upload" className="form-check-label">
//                 File Uploads
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Assign Section */}
//       <div className="row mb-4 position-relative">
//         <div className="col-3 text-end">
//           <label className="form-label fw-bold">Assign</label>
//         </div>

//         {/* Container for all fields */}
//         <div className="col-9 position-relative border p-3 rounded">
//           {/* Assign to Multi-select */}
//           <div className="row mb-3 position-relative">
//             <div className="col-12">
//               <label htmlFor="wd-assign-to" className="form-label fw-bold">
//                 Assign to
//               </label>
//             </div>
//             <div className="col-12 position-relative">
//               <div className="border rounded d-flex align-items-center p-2">
//                 {/* Selected options */}
//                 <span className="badge bg-light text-dark me-2 fs-6">
//                   Everyone <span className="text-danger cursor-pointer">×</span>
//                 </span>
//                 {/* Dropdown icon */}
//                 <FaChevronDown className="ms-auto text-muted" />
//               </div>
//             </div>
//           </div>

//           {/* Due Date */}
//           <div className="mb-3">
//             <label htmlFor="wd-due-date" className="form-label fw-bold">
//               Due
//             </label>
//             <input
//               type="date"
//               id="wd-due-date"
//               value="2024-05-13"
//               className="form-control"
//               readOnly
//             />
//           </div>

//           {/* Available from and Until */}
//           <div className="row mb-3">
//             <div className="col-6 text-start">
//               <label htmlFor="wd-available-from" className="form-label fw-bold">
//                 Available from
//               </label>
//             </div>
//             <div className="col-6 text-start">
//               <label
//                 htmlFor="wd-available-until"
//                 className="form-label fw-bold"
//               >
//                 Until
//               </label>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-6">
//               <input
//                 type="date"
//                 id="wd-available-from"
//                 value="2024-05-06"
//                 className="form-control"
//                 readOnly
//               />
//             </div>
//             <div className="col-6">
//               <input
//                 type="date"
//                 id="wd-available-until"
//                 value="2024-05-30"
//                 className="form-control"
//                 readOnly
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-end mt-4">
//         <Link
//           to={`/Kambaz/Courses/${cid}/Assignments`}
//           id="wd-cancel-btn"
//           className="btn btn-secondary me-2"
//         >
//           Cancel
//         </Link>
//         <Link
//           to={`/Kambaz/Courses/${cid}/Assignments`}
//           id="wd-save-btn"
//           className="btn btn-danger"
//         >
//           Save
//         </Link>
//       </div>
//     </div>
//   ) : null;
// }







// import { FaChevronDown } from "react-icons/fa";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
// import { addAssignment, updateAssignment } from "./reducer";

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams(); // Get course ID and assignment ID from URL
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser?.role === "FACULTY";

//   // Check if creating a new assignment
//   const isNew = aid === "New";
//   const existingAssignment = assignments.find((a: any) => a._id === aid);

//   // Assignment state (Pre-filled for editing, empty for new)
//   const [assignment, setAssignment] = useState({
//     _id: isNew ? "" : existingAssignment?._id,
//     title: isNew ? "" : existingAssignment?.title,
//     description: isNew ? "" : existingAssignment?.description || "",
//     points: isNew ? "100" : existingAssignment?.points || "100",
//     dueDate: isNew ? "" : existingAssignment?.dueDate || "2024-05-13",
//     availableFrom: isNew ? "" : existingAssignment?.availableFrom || "2024-05-06",
//     availableUntil: isNew ? "" : existingAssignment?.availableUntil || "2024-05-30",
//     course: cid,
//   });

//   useEffect(() => {
//     if (existingAssignment && !isNew) {
//       setAssignment(existingAssignment);
//     }
//   }, [existingAssignment, isNew]);

//   const handleSave = () => {
//     if (isNew) {
//       dispatch(addAssignment({ ...assignment, _id: Date.now().toString() }));
//     } else {
//       dispatch(updateAssignment(assignment));
//     }
//     navigate(`/Kambaz/Courses/${cid}/Assignments`);
//   };

//   return isFaculty ? (
//     <div className="container mt-4 ms-5 p-4" style={{ maxWidth: "960px" }}>
//       <div className="row mb-4">
//         <div className="col-12">
//           <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
//           <input
//             id="wd-name"
//             value={assignment.title}
//             onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-4">
//         <div className="col-12">
//           <textarea
//             id="wd-description"
//             className="form-control"
//             placeholder="Enter the assignment description..."
//             cols={70}
//             rows={8}
//             value={assignment.description}
//             onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
//           ></textarea>
//         </div>
//       </div>

//       <div className="row mb-4">
//         <div className="col-3 text-end">
//           <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
//         </div>
//         <div className="col-9">
//           <input
//             id="wd-points"
//             value={assignment.points}
//             className="form-control"
//             onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
//           />
//         </div>
//       </div>

//       <div className="d-flex justify-content-end mt-4">
//         <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
//         <button onClick={handleSave} className="btn btn-danger">Save</button>
//       </div>
//     </div>
//   ) : null;
// }




import { FaChevronDown } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer"; // Import Redux actions

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  // Find existing assignment or create a new one
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: Date.now().toString(), // Generate a unique ID
      title: "",
      description: "",
      points: 100,
      course: cid,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      submissionType: "Online",
    }
  );

  // Handle changes in form fields
  const handleChange = (field: string, value: any) => {
    setAssignment({ ...assignment, [field]: value });
  };

  // Save function: Adds or updates assignment
  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`); // Go back after save
  };

  return isFaculty ? (
    <div id="wd-assignments-editor" className="container mt-4 ms-5 p-4" style={{ maxWidth: "960px" }}>
      {/* Assignment Name */}
      <div className="row mb-4">
        <div className="col-12">
          <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
        </div>
        <div className="col-12">
          <input
            id="wd-name"
            value={assignment.title}
            className="form-control"
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
      </div>

      {/* Description */}
      <div className="row mb-4">
        <div className="col-12">
          <textarea
            id="wd-description"
            className="form-control"
            placeholder="Enter the assignment description..."
            cols={70}
            rows={8}
            value={assignment.description}
            onChange={(e) => handleChange("description", e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* Points */}
      <div className="row mb-4">
        <div className="col-3 text-end">
          <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
        </div>
        <div className="col-9">
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            className="form-control"
            onChange={(e) => handleChange("points", Number(e.target.value))}
          />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-4 position-relative">
        <div className="col-3 text-end">
          <label htmlFor="wd-group" className="form-label fw-bold">Assignment Group</label>
        </div>
        <div className="col-9 position-relative">
          <select id="wd-group" className="form-control">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="READING">READING</option>
            <option value="PROJECTS">PROJECTS</option>
            <option value="EXAMS">EXAMS</option>
          </select>
          <FaChevronDown className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-4 position-relative">
        <div className="col-3 text-end">
          <label htmlFor="wd-submission-type" className="form-label fw-bold">Submission Type</label>
        </div>
        <div className="col-9 position-relative">
          <select
            id="wd-submission-type"
            className="form-control mb-3"
            value={assignment.submissionType}
            onChange={(e) => handleChange("submissionType", e.target.value)}
          >
            <option value="Online">Online</option>
            <option value="No Submission">No Submission</option>
            <option value="On Paper">On Paper</option>
            <option value="External Tool">External Tool</option>
          </select>
          <FaChevronDown className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
        </div>
      </div>

      {/* Assign Section */}
      <div className="row mb-4 position-relative">
        <div className="col-3 text-end">
          <label className="form-label fw-bold">Assign</label>
        </div>
        <div className="col-9 position-relative border p-3 rounded">
          {/* Due Date */}
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
            <input
              type="date"
              id="wd-due-date"
              className="form-control"
              value={assignment.dueDate}
              onChange={(e) => handleChange("dueDate", e.target.value)}
            />
          </div>

          {/* Available from and Until */}
          <div className="row mb-3">
            <div className="col-6 text-start">
              <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
            </div>
            <div className="col-6 text-start">
              <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="date"
                id="wd-available-from"
                className="form-control"
                value={assignment.availableFrom}
                onChange={(e) => handleChange("availableFrom", e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="date"
                id="wd-available-until"
                className="form-control"
                value={assignment.availableUntil}
                onChange={(e) => handleChange("availableUntil", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  ) : null;
}