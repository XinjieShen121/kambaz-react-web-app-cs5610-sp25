// import { FaChevronDown } from "react-icons/fa";

// export default function AssignmentEditor() {
//   return (
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
//           <input id="wd-name" placeholder="A1" className="form-control" />
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
//           <input id="wd-points" value={100} className="form-control" />
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

//       {/* Display Grade As */}
//       <div className="row mb-4 position-relative">
//         <div className="col-3 text-end">
//           <label htmlFor="wd-display-grade" className="form-label fw-bold">
//             Display Grade as
//           </label>
//         </div>
//         <div className="col-9 position-relative">
//           <select id="wd-display-grade" className="form-control">
//             <option value="Percentage" selected>
//               Percentage
//             </option>
//             <option value="Points">Points</option>
//             <option value="Letter Grade">Letter Grade</option>
//             <option value="GPA">GPA</option>
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
//               />
//             </div>
//             <div className="col-6">
//               <input
//                 type="date"
//                 id="wd-available-until"
//                 value="2024-05-30"
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-end mt-4">
//         <button id="wd-cancel-btn" className="btn btn-secondary me-2">
//           Cancel
//         </button>
//         <button id="wd-save-btn" className="btn btn-danger">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }
import { FaChevronDown } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from URL
  const assignment = db.assignments.find((a) => a._id === aid); // Find the correct assignment

  return (
    <div
      id="wd-assignments-editor"
      className="container mt-4 ms-5 p-4"
      style={{ maxWidth: "960px" }}
    >
      {/* Assignment Name */}
      <div className="row mb-4">
        <div className="col-12">
          <label htmlFor="wd-name" className="form-label fw-bold">
            Assignment Name
          </label>
        </div>
        <div className="col-12">
          <input
            id="wd-name"
            value={assignment ? assignment.title : ""}
            className="form-control"
            readOnly
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
          ></textarea>
        </div>
      </div>

      {/* Points */}
      <div className="row mb-4">
        <div className="col-3 text-end">
          <label htmlFor="wd-points" className="form-label fw-bold">
            Points
          </label>
        </div>
        <div className="col-9">
          <input id="wd-points" value="100" className="form-control" readOnly />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-4 position-relative">
        <div className="col-3 text-end">
          <label htmlFor="wd-group" className="form-label fw-bold">
            Assignment Group
          </label>
        </div>
        <div className="col-9 position-relative">
          <select id="wd-group" className="form-control">
            <option value="ASSIGNMENTS" selected>
              ASSIGNMENTS
            </option>
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
          <label htmlFor="wd-submission-type" className="form-label fw-bold">
            Submission Type
          </label>
        </div>
        <div className="col-9 position-relative">
          <div className="border rounded p-3">
            <div className="position-relative">
              <select id="wd-submission-type" className="form-control mb-3">
                <option value="Online" selected>
                  Online
                </option>
                <option value="No Submission">No Submission</option>
                <option value="On Paper">On Paper</option>
                <option value="External Tool">External Tool</option>
              </select>
              <FaChevronDown className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
            </div>
            <label className="form-label fw-bold">Online Entry Options</label>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-website-url"
                className="form-check-input"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign Section */}
      <div className="row mb-4 position-relative">
        <div className="col-3 text-end">
          <label className="form-label fw-bold">Assign</label>
        </div>

        {/* Container for all fields */}
        <div className="col-9 position-relative border p-3 rounded">
          {/* Assign to Multi-select */}
          <div className="row mb-3 position-relative">
            <div className="col-12">
              <label htmlFor="wd-assign-to" className="form-label fw-bold">
                Assign to
              </label>
            </div>
            <div className="col-12 position-relative">
              <div className="border rounded d-flex align-items-center p-2">
                {/* Selected options */}
                <span className="badge bg-light text-dark me-2 fs-6">
                  Everyone <span className="text-danger cursor-pointer">×</span>
                </span>
                {/* Dropdown icon */}
                <FaChevronDown className="ms-auto text-muted" />
              </div>
            </div>
          </div>

          {/* Due Date */}
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label fw-bold">
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value="2024-05-13"
              className="form-control"
              readOnly
            />
          </div>

          {/* Available from and Until */}
          <div className="row mb-3">
            <div className="col-6 text-start">
              <label htmlFor="wd-available-from" className="form-label fw-bold">
                Available from
              </label>
            </div>
            <div className="col-6 text-start">
              <label
                htmlFor="wd-available-until"
                className="form-label fw-bold"
              >
                Until
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="date"
                id="wd-available-from"
                value="2024-05-06"
                className="form-control"
                readOnly
              />
            </div>
            <div className="col-6">
              <input
                type="date"
                id="wd-available-until"
                value="2024-05-30"
                className="form-control"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} id="wd-cancel-btn" className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} id="wd-save-btn" className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}