import { Link, NavLink, useLocation} from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  //const { pathname } = useLocation();
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <NavLink
        to="/Kambaz/Account/Signin"
        id="wd-account-signin-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive
              ? "text-black fw-bold border-start border-3 border-dark ps-3"
              : "text-danger ps-3"
          }`
        }
      >
        Signin
      </NavLink>

      <NavLink
        to="/Kambaz/Account/Signup"
        id="wd-account-signup-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive
              ? "text-black fw-bold border-start border-3 border-dark ps-3"
              : "text-danger ps-3"
          }`
        }
      >
        Signup
      </NavLink>

      <NavLink
        to="/Kambaz/Account/Profile"
        id="wd-account-profile-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${
            isActive
              ? "text-black fw-bold border-start border-3 border-dark ps-3"
              : "text-danger ps-3"
          }`
        }
      >
        Profile
      </NavLink>


      {currentUser && currentUser.role ==="ADMIN" && (
          <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
  );
}
