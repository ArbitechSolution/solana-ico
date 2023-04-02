import React from "react";
import Navbar from "../src/page/navBar";
import Login from "./page/Login";
import Join from "./page/Join";
import MyPage from "./page/MyPage";
import ProtectedRouting from "./routes/protected";
import { Home } from "./page/Home";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Reset from "./page/Reset";
import ConfirmOtp from "./component/login/ConfirmOtp";
import ModelDepositeAdress from "./component/mypage/ModelDepositeAdress";
import ModalOtp from "./component/mypage/otpForWithdraw";
import ConfirmWithdrawOtp from "./component/mypage/ConfirmWithdrawOTP";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import authVerify from "./routes/authVerify";
import { useDispatch } from "react-redux";
// import { logout } from "./Redux/auth/actions";
function App() {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  let isAuthenticated = false;
  if(localStorage.token){
  isAuthenticated = true;
  }
  const dispatch  = useDispatch()
  // const logOut = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />

        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/confirmpassword" element={<ConfirmOtp />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route
            element={<ProtectedRouting isAuthenticated={isAuthenticated} />}
          >
          <Route path="/:ref?" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route
              path="/updateWalletAddress"
              element={<ModelDepositeAdress />}
            />
            {/* <Route path="/home/:ref?" element={<Home />} /> */}
            <Route path="/otpforWithdraw/:type/:id" element={<ModalOtp />} />
            <Route path="/confirmWithdrawOtp/:type/:id" element={<ConfirmWithdrawOtp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
