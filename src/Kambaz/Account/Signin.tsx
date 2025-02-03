
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h1 className="mb-4 text-center">Sign in</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100"
      >
        Sign in{" "}
      </Link>
      <div className="text-center">
  <Link to="/Kambaz/Account/Signup" className="text-decoration-underline">
        Sign up
      </Link>
      </div>
    </div>

  );
}
