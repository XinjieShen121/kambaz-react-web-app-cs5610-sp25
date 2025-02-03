
import { FaPlus, FaSearch } from "react-icons/fa";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Assignments() {
  return (
    <div
      id="wd-assignments"
      className="container mt-5 ms-5"
    >
      {/* Controls */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch className="text-muted fs-5" />
          </span>
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="form-control border-start-0 fs-5"
          />
        </div>
        <div className="float-end">
          <button
            id="wd-add-assignment-group"
            className="btn btn-secondary me-2 fs-5"
          >
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger fs-5">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignment List */}
      <ul id="wd-assignments-list" className="list-group rounded-0">
        {/* Assignment Group */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
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
          <ul className="wd-lessons list-group rounded-0">
            {/* Assignment 1 */}
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <HiOutlineDocumentText className="text-success me-2 fs-5" />
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link fw-bold fs-4 text-dark"
                >
                  A1
                </a>
              </div>
              <AssignmentControlButtons />
              <div className="mt-2 ps-5 text-muted me-5 pe-5 fs-6">
                <span className="text-danger fw-bold">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 6 at 12:00am |
                <br />
                <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
            </li>

            {/* Assignment 2 */}
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <HiOutlineDocumentText className="text-success me-2 fs-5" />
                <a
                  href="#/Kambaz/Courses/1234/Assignments/124"
                  className="wd-assignment-link fw-bold fs-4 text-dark"
                >
                  A2
                </a>
              </div>
              <AssignmentControlButtons />
              <div className="mt-2 ps-5 text-muted me-5 pe-5 fs-6">
                <span className="text-danger fw-bold">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 20 at 12:00am |
                <br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </li>

            {/* Assignment 3 */}
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <HiOutlineDocumentText className="text-success me-2 fs-5" />
                <a
                  href="#/Kambaz/Courses/1234/Assignments/125"
                  className="wd-assignment-link fw-bold fs-4 text-dark"
                >
                  A3
                </a>
              </div>
              <AssignmentControlButtons />
              <div className="mt-2 ps-5 text-muted me-5 pe-5 fs-6">
                <span className="text-danger fw-bold">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> May 20 at 12:00am | 
                <br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
