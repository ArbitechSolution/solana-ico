import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import API from "../../config";
import { toast } from "react-toastify";



const ConfirmOtp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleResetPassword = async () => {
    try {
      let emailGet = localStorage.getItem("email");
      let user = await API.post(`/api/auth/getUserId`, {
        email: emailGet,
      });
      await API.post(`/api/auth/reset-password`, {
        user_id: user.data.data.userId,
        password: password,
        confirmPassword: confirmPassword,
        resetCode: otp,
      })
        .then((response) => {
          navigate("/login");
          toast.info("Password reset Sucessfully");
        })
        .catch((error) => {
          console.log(error, "error");
          toast.error("Password reset failed");
        });
    } catch (e) {
      console.log("error while getting info");
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
                      Reset
                    </h5>
                    <div className="form-label-group  my-4">
                      <input
                        type="text"
                        name="ref-code"
                        className="form-control rounded-1 mb-4"
                        placeholder="OTP"
                        required
                        value={otp}
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-label-group  my-4">
                      <input
                        type="password"
                        name="password"
                        className="form-control rounded-1 mb-4"
                        placeholder="Enter new password"
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
                        name="confirm_password"
                        className="form-control rounded-1 mb-4"
                        placeholder="Confirm new password"
                        required
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => {
                          handleResetPassword();
                        }}
                        className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                      >
                        Reset
                        <i className="fa fa-gears px-1"></i>
                      </button>
                    </div>

                    <small className="text-white ">
                      Don't received an otp?{" "}
                    </small>
                    <Link to="/reset" type="button" className="text-warning">
                      Resend
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

export default ConfirmOtp;
