// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import PeopleDetails from "./Details";
// import { findUsersForCourse } from "../client"; // from Courses/client.ts

// export default function EnrolledPeopleTable() {
//   const { cid } = useParams<{ cid: string }>();
//   const [users, setUsers] = useState<any[]>([]);

//   const fetchUsers = async () => {
//     if (!cid) return;
//     try {
//       const enrolledUsers = await findUsersForCourse(cid);
//       setUsers(enrolledUsers);
//     } catch (err) {
//       console.error("Failed to fetch enrolled users:", err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [cid]);

//   return (
//     <div id="wd-people-table">
//       <PeopleDetails />
//       <table className="table table-striped ms-5">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Date of Birth</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {users.map((user: any) => (
//             <tr key={user._id}> */}

//             {/* {users
//   .filter((user) => user && user._id) // 💥 skip null or broken ones
//   .map((user: any) => ( */}
// {Array.from(
//   new Map(
//     users
//       .filter((user) => user && user._id)
//       .map((user) => [user._id, user]) // use Map to deduplicate by user ID
//   ).values()
// ).map((user: any) => (


//     <tr key={user._id}>


//               <td className="wd-full-name text-nowrap">
//                 <Link
//                   to={`/Kambaz/Account/Users/${user._id}`}
                 
//                   className="text-decoration-none"
//                 >
//                   <FaUserCircle className="me-2 fs-1 text-secondary" />
//                   <span className="wd-first-name">{user.firstName}</span>{" "}
//                   <span className="wd-last-name">{user.lastName}</span>
//                 </Link>
//               </td>
//               <td>{user.loginId}</td>
//               <td>{user.section}</td>
//               <td>{user.role}</td>
//               <td>
//                 {user.dob
//                   ? new Date(user.dob).toLocaleDateString()
//                   : "—"}
//               </td>
//               <td>{user.lastActivity}</td>
//               <td>{user.totalActivity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }









import { useEffect, useState } from "react";
import { useParams } from "react-router";
//import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { findUsersForCourse } from "../client"; // from Courses/client.ts

export default function EnrolledPeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const fetchUsers = async () => {
    if (!cid) return;
    try {
      const enrolledUsers = await findUsersForCourse(cid);
      setUsers(enrolledUsers);
    } catch (err) {
      console.error("Failed to fetch enrolled users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  const uniqueUsers = Array.from(
    new Map(
      users.filter((u) => u && u._id).map((u) => [u._id, u])
    ).values()
  );

  return (
    <div id="wd-people-table" className="position-relative">
      {selectedUserId && (
        <PeopleDetails uid={selectedUserId} onClose={() => setSelectedUserId(null)} />
      )}
      

      <table className="table table-striped ms-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Date of Birth</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {uniqueUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <button
                  onClick={() => setSelectedUserId(user._id)}
                  className="btn btn-link text-decoration-none p-0"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span>{user.firstName} {user.lastName}</span>
                </button>
              </td>
              <td>{user.loginId}</td>
              <td>{user.section}</td>
              <td>{user.role}</td>
              <td>{user.dob ? new Date(user.dob).toLocaleDateString() : "—"}</td>
              <td>{user.lastActivity}</td>
              <td>{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}