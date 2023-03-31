import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import API from "../../config";
import { toast } from "react-toastify";

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
      let res = await API.post("/api/auth/register", {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        walletAddress: walletAddress,
      })
        .then((res) => {
          toast.success("User registered successfully");
        })
        .catch((err) => {
          toast.error("Registration failed");
        });
      console.log("res", res);
      navigate("/login");
    } catch (e) {
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
                      Join Us
                    </h5>
                    <div className="form-label-group  my-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control rounded-1 mb-4"
                        placeholder="Enter name"
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
                        placeholder="Enter phone"
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
                        placeholder="Enter password"
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
                        placeholder="Confirm password"
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
                        placeholder="Enter email"
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
                        placeholder="deposit wallet"
                        required
                        value={walletAddress}
                        onChange={(e) => {
                          setWalletAddress(e.target.value);
                        }}
                      />
                    </div>

                    <div className="text-center d-flex">
                      <button
                        className="btn btn-success text-center rounded-1 form-control me-2 text-white my-md-4"
                        onClick={() => {
                          handleRegister();
                        }}
                      >
                        Register <i className="fa fa-paper-plane px-1"></i>
                      </button>
                      <Link
                        to="/"
                        className="btn btn-outline-danger text-center rounded-1 form-control text-white my-md-4"
                      >
                        Cancel <i className="fa fa-trash-o px-1"></i>
                      </Link>
                    </div>

                    <small className="text-white ">
                      Already have an account?{" "}
                    </small>
                    <Link to="/login" type="submit" className="text-warning">
                      Login
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
