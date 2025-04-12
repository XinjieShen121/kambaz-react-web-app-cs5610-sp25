
// previous working

// import { FaUserCircle } from "react-icons/fa";
// import PeopleDetails from "./Details";
// import { Link } from "react-router-dom";

// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import * as db from "../../Database";

// export default function PeopleTable({ users = [] }: { users?: any[] }) {
//   // const { cid } = useParams();
//   // const { users, enrollments } = db;
//   return (
//     <div id="wd-people-table">
//       <PeopleDetails uid={""} onClose={function (): void {
//         throw new Error("Function not implemented.");
//       } } />
      
//       <table className="table table-striped ms-5">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users
//             // .filter((usr) =>
//             //   enrollments.some(
//             //     (enrollment) =>
//             //       enrollment.user === usr._id && enrollment.course === cid
//             //   )
//             // )
//             .map((user: any) => (
//               <tr key={user._id}>
//                 <td className="wd-full-name text-nowrap">
//                   <Link
//                     to={`/Kambaz/Account/Users/${user._id}`}
//                     className="text-decoration-none"
//                   >
//                     <FaUserCircle className="me-2 fs-1 text-secondary" />
//                     <span className="wd-first-name">{user.firstName}</span>
//                     <span className="wd-last-name">{user.lastName}</span>
//                   </Link>
//                 </td>
//                 <td className="wd-login-id">{user.loginId}</td>
//                 <td className="wd-section">{user.section}</td>
//                 <td className="wd-role">{user.role}</td>
//                 <td className="wd-last-activity">{user.lastActivity}</td>
//                 <td className="wd-total-activity">{user.totalActivity}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




// import { FaUserCircle } from "react-icons/fa";

// export default function PeopleTable({
//   users = [],
//   onClickUser,
// }: {
//   users?: any[];
//   onClickUser?: (uid: string) => void;
// }) {
//   return (
//     <div id="wd-people-table">
//       <table className="table table-striped ms-5">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user: any) => (
//             <tr key={user._id}>
//               <td className="wd-full-name text-nowrap">
//                 {onClickUser ? (
//                   <button
//                     onClick={() => onClickUser(user._id)}
//                     className="btn btn-link text-decoration-none p-0"
//                   >
//                     <FaUserCircle className="me-2 fs-1 text-secondary" />
//                     <span className="wd-first-name">{user.firstName}</span>{" "}
//                     <span className="wd-last-name">{user.lastName}</span>
//                   </button>
//                 ) : (
//                   <>
//                     <FaUserCircle className="me-2 fs-1 text-secondary" />
//                     <span className="wd-first-name">{user.firstName}</span>{" "}
//                     <span className="wd-last-name">{user.lastName}</span>
//                   </>
//                 )}
//               </td>
//               <td className="wd-login-id">{user.loginId}</td>
//               <td className="wd-section">{user.section}</td>
//               <td className="wd-role">{user.role}</td>
//               <td className="wd-last-activity">{user.lastActivity}</td>
//               <td className="wd-total-activity">{user.totalActivity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PeopleTable({
  users = [],
  onClickUser,
}: {
  users?: any[];
  onClickUser?: (uid: string) => void;
}) {
  return (
    <div id="wd-people-table">
      <table className="table table-striped ms-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                {onClickUser ? (
                  // for course view: click triggers detail panel
                  <button
                    onClick={() => onClickUser(user._id)}
                    className="btn btn-link text-decoration-none p-0"
                  >
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </button>
                ) : (
                  // for admin view: link to /Users/:uid
                  <Link
                    to={`/Kambaz/Account/Users/${user._id}`}
                    className="text-decoration-none"
                  >
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                )}
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}