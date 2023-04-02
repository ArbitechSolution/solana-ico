import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Redux/auth/actions";
import API from "../../config";
import { toast } from "react-toastify";
import {resolveAfterGiven} from "../../constant"
const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      let userData = await API.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", userData.data.data.token);
      dispatch(login(userData.data.data));
      toast.success(userData.data.showableMessage);
      await resolveAfterGiven(1500)
      window.location.href = "/";

    } catch (e) {
      toast.error(e.response.data.showableMessage)
      console.log("error while login", e.response.data.showableMessage);
    }
  };
  return (
    <div>
      <>
        <div>
          <div className="container  py-5">
            <div className="row">
              <div className="col-sm-9 col-md-9 col-lg-5 mx-auto">
                <div className=" text-light card-signin my-5">
                  <div className="card-body bgLogin p-4 ">
                    <h5 className="card-title display-4 text-white text-center p-md-4">
                    로그인
                    </h5>
                    <form className="form-signin my-2">
                      <div className="form-label-group  my-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control rounded-1 mb-4"
                          placeholder="이메일 입력"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="form-label-group  my-2">
                        <input
                          type="password"
                          name="password"
                          className="form-control rounded-1 "
                          placeholder="비밀번호"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </div>

                      <p className="d-flex  small">
                        <Link
                          className="text-white  text-left text-dark"
                          to="/reset"
                        >
                          비밀번호 분실?
                        </Link>
                      </p>
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => handleLogin()}
                          className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                        >
                          로그인 <i className="fa fa-paper-plane px-1"></i>
                        </button>
                      </div>
                    </form>

                    <small className="text-white ">
                    계정이 없으신가요??{" "}
                    </small>
                    <Link to="/join" type="button" className="text-warning">
                    회원가입
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginComponent;
