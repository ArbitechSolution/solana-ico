import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PasswordRest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
                      Request Otp
                    </h5>
                    <form className="form-signin my-2">
                      <div className="form-label-group  my-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>

                      <div className="text-center">
                        <Link
                          type="button"
                          onClick={() => {}}
                          to="/confirmpassword"
                          className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                        >
                          Send Otp <i className="fa fa-paper-plane px-1"></i>
                        </Link>
                      </div>
                    </form>
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

export default PasswordRest;
