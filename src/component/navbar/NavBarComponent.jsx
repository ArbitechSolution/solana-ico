import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/actions";

const NavBarComponent = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navBG py-md-4 ">
      <div className="container">
        <a className="navbar-brand" href="/">
          COIN BUY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span data-bs-target="#navbarSupportedContent">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/join">
                <span data-bs-target="#navbarSupportedContent">Join</span>
              </Link>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <Link
                  className="nav-link"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  <span data-bs-target="#navbarSupportedContent">Logout</span>
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  <span data-bs-target="#navbarSupportedContent">Login</span>
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mypage">
                <span data-bs-target="#navbarSupportedContent">My Page</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
