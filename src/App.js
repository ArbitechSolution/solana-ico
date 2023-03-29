import React from "react";
import Navbar from "../src/page/navBar";
import Login from "./page/Login";
import Join from "./page/Join";
import MyPage from "./page/MyPage";
import ProtectedRouting from "./routes/protected";
import { Home } from "./page/Home";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  let tokendata = jwt.decode(sessionStorage.token);
  console.log("tokendata", tokendata);
  let isAuthenticated = false;
  if (sessionStorage.token) {
    isAuthenticated = true;
  }
  console.log(isAuthenticated, "auth");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route
            element={<ProtectedRouting isAuthenticated={isAuthenticated} />}
          >
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
