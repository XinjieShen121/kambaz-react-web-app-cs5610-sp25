import React, { useState } from "react";
import FormControl from "react-bootstrap/esm/FormControl";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  // New module state
  const [moduleObj, setModuleObj] = useState({
    id: "CS5610-Module1",
    name: "Introduction to WebDevelopment",
    description: "An introduction to full-stack web development",
    course: "CS5610",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      <h4>Module Object</h4>
      <a
        id="wd-get-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />
      <h4>Module Name</h4>
      <a
        id="wd-get-module-name"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />
      <h4>Update Module Name</h4>

      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${moduleObj.name}`}
      >
        Update Module Name
      </a>
      <FormControl
        className="w-50"
        id="wd-module-name"
        value={moduleObj.name}
        onChange={(e) => setModuleObj({ ...moduleObj, name: e.target.value })}
      />

      <hr />
      <h4>Update Module Description</h4>
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${moduleObj.description}`}
      >
        Update Module Description
      </a>
      <FormControl
        className="w-50"
        id="wd-module-description"
        value={moduleObj.description}
        onChange={(e) =>
          setModuleObj({ ...moduleObj, description: e.target.value })
        }
      />

      <hr />

      <h4>Update Assignment Score</h4>
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <FormControl
        type="number"
        className="w-50"
        id="wd-assignment-score"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            score: parseInt(e.target.value, 10),
          })
        }
      />
      <hr />

      <h4>Update Assignment Completed</h4>
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>

      {/* Checkbox + "True/False" text on the left */}
      <FormControl
        type="checkbox"
        id="wd-assignment-completed"
        style={{ width: "auto" }} // ensures it doesn't stretch
        className="me-2"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            completed: (e.target as HTMLInputElement).checked,
          })
        }
      />
      <span>{assignment.completed ? "True" : "False"}</span>

      <hr />
    </div>
  );
}
