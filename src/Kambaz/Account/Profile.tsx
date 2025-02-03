

import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h1 className="mb-4 text-center">Profile</h1>

      {/* Username Input */}
      <div className="mb-3">
        <input
          defaultValue="alice"
          placeholder="username"
          className="form-control"
        />
      </div>

      {/* Password Input */}
      <div className="mb-3">
        <input
          defaultValue="123"
          placeholder="password"
          type="password"
          className="form-control"
        />
      </div>

      {/* First Name Input */}
      <div className="mb-3">
        <input
          defaultValue="Alice"
          placeholder="First Name"
          className="form-control"
        />
      </div>

      {/* Last Name Input */}
      <div className="mb-3">
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="form-control"
        />
      </div>

      {/* Date of Birth Input */}
      <div className="mb-3">
        <input
          defaultValue="2000-01-01"
          type="date"
          className="form-control"
        />
      </div>

      {/* Email Input */}
      <div className="mb-3">
        <input
          defaultValue="alice@wonderland"
          type="email"
          className="form-control"
        />
      </div>

      {/* Role Select */}
      <div className="mb-3">
        <select defaultValue="FACULTY" className="form-control">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      {/* Sign Out Button */}
      <div className="text-center">
        <Link to="/Kambaz/Account/Signin" className="btn btn-danger">
          Sign out
        </Link>
      </div>
    </div>
  );
}