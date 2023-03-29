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
                      Reset
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
                      <div className="form-label-group  my-2">
                        <input
                          type="password"
                          name="password"
                          className="form-control rounded-1 "
                          placeholder="New password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </div>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => {}}
                          className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                        >
                          Reset <i class="fa fa-gears px-1"></i>
                        </button>
                      </div>
                    </form>

                    <small className="text-white ">
                      Don't have an account?{" "}
                    </small>
                    <Link to="/join" type="button" className="text-warning">
                      Register
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

export default PasswordRest;
