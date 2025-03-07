// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
// import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   assignments: assignments, // Load initial assignments from the database
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment = {
//         _id: uuidv4(),
//         ...assignment, // Spread all properties
//       };
//       state.assignments.push(newAssignment);
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (assignment) => assignment._id !== assignmentId
//       );
//     },
//     updateAssignment: (state, { payload: updatedAssignment }) => {
//       state.assignments = state.assignments.map((assignment) =>
//         assignment._id === updatedAssignment._id ? updatedAssignment : assignment
//       );
//     },
//   },
// });

// export const { addAssignment, deleteAssignment, updateAssignment } =
//   assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      state.assignments.push({ _id: uuidv4(), ...payload });
    },
    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter((a) => a._id !== payload);
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;