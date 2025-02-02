// export default function Assignments() {
//     return (
//     <div id="wd-assignments">
//         <input placeholder="Search for Assignments"
//         id="wd-search-assignment" />
//         <button id="wd-add-assignment-group">+ Group</button>
//         <button id="wd-add-assignment">+ Assignment</button>
//         <h3 id="wd-assignments-title">
//             ASSIGNMENTS 40% of Total <button>+</button> </h3>
//         <ul id="wd-assignment-list">
//             <li className="wd-assignment-list-item">
//                 <a href="#/Kambaz/Courses/1234/Assignments/123"
//                 className="wd-assignment-link" >
//                     A1 - ENV + HTML
//                     </a> 
//                     <ul>
//                         <li className="wd-assignment-list-item">Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |</li>
//                         <li className="wd-assignment-list-item"><strong>Due</strong> May 13 at 11:59pm | 100 pts</li>
//                     </ul>
//              </li>
//              <li className="wd-assignment-list-item">
//                 <a href="#/Kambaz/Courses/1234/Assignments/124"
//                 className="wd-assignment-link">
//                     A2 - CSS + BOOTSTRAP
//                     </a>
//                     <ul>
//                         <li className="wd-assignment-list-item">Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |</li>
//                         <li className="wd-assignment-list-item"><strong>Due</strong> May 20 at 11:59pm | 100 pts</li>
//                     </ul>
//             </li>
//             <li className="wd-assignment-list-item">
//             <a href="#/Kambaz/Courses/1234/Assignments/124"
//             className="wd-assignment-link">
//                 A3 - JACASCRIPT + REACT
//                 </a>
//                 <ul>
//                     <li className="wd-assignment-list-item">Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | </li>
//                     <li className="wd-assignment-list-item"><strong>Due</strong> May 27 at 11:59pm | 100 pts</li>
//                 </ul>
//             </li>
//         </ul>

            
        
//     </div>
//     );}

import { FaPlus, FaSearch } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-5">
      {/* Controls */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center w-50">
          <FaSearch className="text-muted me-2 fs-5" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="form-control"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-success">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Title */}
      <h3 id="wd-assignments-title" className="mb-4">
        ASSIGNMENTS 40% of Total{" "}
        <button className="btn btn-primary btn-sm">
          <FaPlus />
        </button>
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group">
        {/* Assignment 1 */}
        <li className="wd-assignment-list-item list-group-item border-start border-success border-3 mb-3 p-3">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold">
            A1 - ENV + HTML
          </a>
          <ul className="mt-2">
            <li className="text-muted">
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |
            </li>
            <li className="text-muted">
              <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </li>
          </ul>
        </li>

        {/* Assignment 2 */}
        <li className="wd-assignment-list-item list-group-item border-start border-success border-3 mb-3 p-3">
          <a href="#/Kambaz/Courses/1234/Assignments/124" className="wd-assignment-link fw-bold">
            A2 - CSS + BOOTSTRAP
          </a>
          <ul className="mt-2">
            <li className="text-muted">
              Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |
            </li>
            <li className="text-muted">
              <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </li>
          </ul>
        </li>

        {/* Assignment 3 */}
        <li className="wd-assignment-list-item list-group-item border-start border-success border-3 mb-3 p-3">
          <a href="#/Kambaz/Courses/1234/Assignments/125" className="wd-assignment-link fw-bold">
            A3 - JAVASCRIPT + REACT
          </a>
          <ul className="mt-2">
            <li className="text-muted">
              Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |
            </li>
            <li className="text-muted">
              <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}