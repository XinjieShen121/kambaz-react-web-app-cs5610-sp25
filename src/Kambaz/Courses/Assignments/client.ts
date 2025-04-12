// import axios from "axios";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// export const findAssignmentsForCourse = async (courseId: string) => {
//   const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
//   return response.data;
// };

// export const createAssignment = async (courseId: string, assignment: any) => {
//   const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
//   return response.data;
// };

// export const updateAssignment = async (assignment: any) => {
//   const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
//   return response.data;
// };

// export const deleteAssignment = async (assignmentId: string) => {
//   const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//   return response.data;
// };



import axios from "axios";

// ✅ Axios instance with credentials
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// ✅ Get assignments for a specific course
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return response.data;
};

// ✅ Create a new assignment in a course
export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

// ✅ Update an existing assignment
export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return response.data;
};

// ✅ Delete an assignment by ID
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};