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

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated, "auth");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/reset" element={<Reset />} />
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
