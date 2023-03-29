import React from "react";
import { Link } from "react-router-dom";

const LoginComponent = () => {
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
                      Sign In
                    </h5>
                    <form className="form-signin my-2">
                      <div className="form-label-group  my-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-2">
                        <input
                          type="password"
                          name="password"
                          className="form-control rounded-1 "
                          placeholder="Password"
                          required
                        />
                      </div>

                      <p class="d-flex  small">
                        <Link class="text-white  text-left text-dark" of="/">
                          Forgot password?
                        </Link>
                      </p>
                      <div className="text-center">
                        <Link
                          to="/"
                          type="submit"
                          className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                        >
                          Sign In <i class="fa fa-paper-plane px-1"></i>
                        </Link>
                      </div>
                    </form>

                    <small className="text-white ">
                      Don't have an account?{" "}
                    </small>
                    <Link to="/join" type="submit" className="text-warning">
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

export default LoginComponent;
