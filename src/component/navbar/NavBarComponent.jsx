import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/actions";

const NavBarComponent = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navBG py-md-4 ">
      <div class="container">
        <a class="navbar-brand" href="/">
          COIN BUY
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  Home
                </span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/join">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  Join
                </span>
              </Link>
            </li>
            <li class="nav-item">
              {isAuthenticated ? (
                <Link
                  class="nav-link"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  <span
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                  >
                    Logout
                  </span>
                </Link>
              ) : (
                <Link class="nav-link" to="/login">
                  <span
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                  >
                    Login
                  </span>
                </Link>
              )}
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/mypage">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  My Page
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
