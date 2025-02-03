

import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5">
      <h1 className="mb-4 text-center">Sign up</h1>
      
      {/* Username Input */}
      <div className="mb-3">
        <input placeholder="username" className="form-control" />
      </div>

      {/* Password Input */}
      <div className="mb-3">
        <input
          placeholder="password"
          type="password"
          className="form-control"
        />
      </div>

      {/* Verify Password Input */}
      <div className="mb-3">
        <input
          placeholder="verify password"
          type="password"
          className="form-control"
        />
      </div>

      {/* Sign Up Button */}
      <div className="mb-3">
        <Link
          to="/Kambaz/Account/Profile"
          className="btn btn-primary w-100"
        >
          Sign up
        </Link>
      </div>

      {/* Sign In Link */}
      <div className="text-center">
        <Link to="/Kambaz/Account/Signin" className="text-decoration-underline">Sign in</Link>
      </div>
    </div>
  );
}