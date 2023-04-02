import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import API from "../../config";
import { toast } from "react-toastify";
import { resolveAfterGiven } from '../../constant'
const JoinComponent = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const handleRegister = async () => {
    try {
      await API.post("/api/auth/register", {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        walletAddress: walletAddress,
      })
        .then(async (res) => {
          localStorage.setItem("token", res.data.data.token);
          toast.success(res.data.showableMessage);
          await resolveAfterGiven(1500)
          window.location.href = "/";
        })
        .catch((err) => {
          toast.error("Registration failed");
        });
    } catch (e) {
      toast.error(e.response.data.showableMessage)
      console.log("error while register");
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
                      회원가입
                    </h5>
                    <div className="form-label-group  my-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control rounded-1 mb-4"
                        placeholder="이름"
                        required
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-label-group  my-4">
                      <input
                        type="number"
                        name="phone"
                        className="form-control rounded-1 mb-4"
                        placeholder="연락처"
                        required
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-label-group  my-4">
                      <input
                        type="password"
                        name="password"
                        className="form-control rounded-1 mb-4"
                        placeholder="비밀번호"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-label-group  my-4">
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control rounded-1 mb-4"
                        placeholder="비밀번호 확인"
                        required
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-label-group  my-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-1 mb-4"
                        placeholder="이메일"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-label-group  my-2">
                      <input
                        type="text"
                        name="wallet"
                        className="form-control rounded-1"
                        placeholder="입금주소(솔라나 지갑)"
                        required
                        value={walletAddress}
                        onChange={(e) => {
                          setWalletAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div
                      className="alert alert-info alert-dismissible fade show text-start "
                      role="alert"
                    >
                      <span>
                        <strong>[안내사항]</strong>
                        <p>입금 받을 주소가 솔라나 체인 지갑주소를 확인해 주시기 바랍니다</p>
                        <p>잘못 입력된 지갑 주소에 대한 전송은 책임지지 않으니 꼭 확인 부탁 드립니다</p>
                        <p>입금 주소를 변경하려면 마이페이지에서 변경 가능합니다</p>
                      </span>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="text-center d-flex">
                      <button
                        className="btn btn-success text-center rounded-1 form-control me-2 text-white my-md-4"
                        onClick={() => {
                          handleRegister();
                        }}
                      >
                        가입 <i className="fa fa-paper-plane px-1"></i>
                      </button>
                      <Link
                        to="/"
                        className="btn btn-outline-danger text-center rounded-1 form-control text-white my-md-4"
                      >
                        취소 <i className="fa fa-trash-o px-1"></i>
                      </Link>
                    </div>

                    <small className="text-white ">
                      계정이 없으신가요??{" "}
                    </small>
                    <Link to="/login" type="submit" className="text-warning">
                      로그인
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

export default JoinComponent;
