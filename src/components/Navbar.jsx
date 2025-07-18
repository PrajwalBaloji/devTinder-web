import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { logout } from "../api/auth";
import { removeUser } from "../redux/slice/user";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          😇 Dev Tinder
        </NavLink>
      </div>
      {user && (
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="profile image" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className="justify-between" to={"/profile"}>
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/connections"
                  className="justify-between hover:bg-gray-800 rounded-md p-2"
                >
                  Connections <span className="badge badge-error">💗</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/requests"
                  className="justify-between hover:bg-gray-800 rounded-md p-2"
                >
                  Requests <span className="badge badge-warning">👁️</span>
                </NavLink>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
