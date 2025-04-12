// import axios from "axios";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// export const enroll = async (userId: string, courseId: string) => {
//   const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
//   return response.data;
// };

// export const unenroll = async (userId: string, courseId: string) => {
//   const response = await axios.delete(ENROLLMENTS_API, {
//     data: { userId, courseId },
//   });
//   return response.data;
// };

// export const findEnrollmentsForUser = async (userId: string) => {
//   const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
//   return response.data;
// };


// import axios from "axios";
// const SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const USERS_API = `${SERVER}/api/users`;

// export const findEnrollmentsByUser = async (userId: string) => {
//   const response = await axios.get(`${USERS_API}/${userId}/enrollments`);
//   return response.data;
// };

// export const enrollUserInCourse = async (userId: string, courseId: string) => {
//   const response = await axios.post(`${USERS_API}/${userId}/courses/${courseId}/enroll`);
//   return response.data;
// };

// export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
//   const response = await axios.delete(`${USERS_API}/${userId}/courses/${courseId}/unenroll`);
//   return response.data;
// };


//delete

// import axios from "axios";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// export const enroll = async (userId: string, courseId: string) => {
//   const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
//   return response.data;
// };

// export const unenroll = async (userId: string, courseId: string) => {
//   const response = await axios.delete(ENROLLMENTS_API, {
//     data: { userId, courseId },
//   });
//   return response.data;
// };

// should NOT be using findEnrollmentsForUser anymore
// export const findEnrollmentsForUser = async (userId: string) => {
//   const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
//   return response.data;
// };
