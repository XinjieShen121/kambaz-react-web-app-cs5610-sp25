import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
  enrollments: db.enrollments, // Load initial enrollments from database
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action) => {
      state.enrollments.push({
        _id: Math.random().toString(36).substr(2, 9), // Generate unique ID
        user: action.payload.userId,
        course: action.payload.courseId,
      });
    },
    unenroll: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          enrollment.user !== action.payload.userId ||
          enrollment.course !== action.payload.courseId
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;