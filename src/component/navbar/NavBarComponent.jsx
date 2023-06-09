import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/actions";
import { toast } from "react-toastify";
import {resolveAfterGiven} from "../../constant"
const NavBarComponent = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  let isAuthenticated = false;
  if(localStorage.token){
  isAuthenticated = true;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async() => {
    localStorage.removeItem("token");
    toast.info("성공적으로 로그아웃");
    await resolveAfterGiven(1500)
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navBG py-md-4 ">
      <div className="container">
        <a className="navbar-brand fs-3 fw-bold" href="/">
        PRIVATE SALE
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
            {!isAuthenticated &&<li className="nav-item">
              <Link className="nav-link" to="/join">
                <span data-bs-target="#navbarSupportedContent">회원가입</span>
              </Link>
            </li>}
            <li className="nav-item">
              {isAuthenticated ? (
                <Link
                  className="nav-link"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  <span data-bs-target="#navbarSupportedContent">로그 아웃</span>
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  <span data-bs-target="#navbarSupportedContent">로그인</span>
                </Link>
              )}
            </li>
           {isAuthenticated && <li className="nav-item">
              <Link className="nav-link" to="/mypage">
                <span data-bs-target="#navbarSupportedContent">마이페이지</span>
              </Link>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
