// import { createSlice } from "@reduxjs/toolkit";
// import * as db from "../../Database";


// const initialState = {
//   enrollments: db.enrollments, // Load initial enrollments from database
// };

// const enrollmentsSlice = createSlice({
//   name: "enrollments",
//   initialState,
//   reducers: {
//     enroll: (state, action) => {
//       state.enrollments.push({
//         _id: Math.random().toString(36).substr(2, 9), // Generate unique ID
//         user: action.payload.userId,
//         course: action.payload.courseId,
//       });
//     },
//     unenroll: (state, action) => {
//       state.enrollments = state.enrollments.filter(
//         (enrollment) =>
//           enrollment.user !== action.payload.userId ||
//           enrollment.course !== action.payload.courseId
//       );
//     },
//   },
// });

// export const { enroll, unenroll } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;






// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface Enrollment {
//   _id: string;
//   user: string;
//   course: string;
// }

// interface EnrollmentState {
//   enrollments: Enrollment[];
// }

// const initialState: EnrollmentState = {
//   enrollments: [],
// };

// const enrollmentsSlice = createSlice({
//   name: "enrollments",
//   initialState,
//   reducers: {
//     setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
//       state.enrollments = action.payload;
//     },
//     enroll: (state, action: PayloadAction<Enrollment>) => {
//       state.enrollments.push(action.payload);
//     },
//     unenroll: (
//       state,
//       action: PayloadAction<{ userId: string; courseId: string }>
//     ) => {
//       const { userId, courseId } = action.payload;
//       state.enrollments = state.enrollments.filter(
//         (e) => e.user !== userId || e.course !== courseId
//       );
//     },
//   },
// });

// export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;






// // ✅ Final reducer.ts for enrollments
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface Enrollment {
//   _id: string;
//   user: string;
//   course: string;
// }

// interface EnrollmentState {
//   enrollments: Enrollment[];
// }

// const initialState: EnrollmentState = {
//   enrollments: [],
// };

// const enrollmentsSlice = createSlice({
//   name: "enrollments",
//   initialState,
//   reducers: {
//     setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
//       state.enrollments = action.payload;
//     },
//     enroll: (state, action: PayloadAction<Enrollment>) => {
//       state.enrollments.push(action.payload);
//     },
//     unenroll: (
//       state,
//       action: PayloadAction<{ userId: string; courseId: string }>
//     ) => {
//       const { userId, courseId } = action.payload;
//       state.enrollments = state.enrollments.filter(
//         (e) => e.user !== userId || e.course !== courseId
//       );
//     },
//   },
// });

// export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;





// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface Enrollment {
//   _id: string;
//   user: string;
//   course: string;
// }

// interface EnrollmentState {
//   enrollments: Enrollment[];
// }

// const initialState: EnrollmentState = {
//   enrollments: [],
// };

// const enrollmentsSlice = createSlice({
//   name: "enrollments",
//   initialState,
//   reducers: {
//     // Set all enrollments fetched from the server
//     setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
//       state.enrollments = action.payload;
//     },

//     // Add one new enrollment returned by the server
//     enroll: (state, action: PayloadAction<Enrollment>) => {
//       state.enrollments.push(action.payload);
//     },

//     // Remove enrollment based on user + course match
//     unenroll: (
//       state,
//       action: PayloadAction<{ userId: string; courseId: string }>
//     ) => {
//       state.enrollments = state.enrollments.filter(
//         (e) => e.user !== action.payload.userId || e.course !== action.payload.courseId
//       );
//     },
//   },
// });

// export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
    },
    enroll: (state, action: PayloadAction<Enrollment>) => {
      state.enrollments.push(action.payload);
    },
    unenroll: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      state.enrollments = state.enrollments.filter(
        (e) => e.user !== action.payload.userId || e.course !== action.payload.courseId
      );
    },
  },
});

export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;