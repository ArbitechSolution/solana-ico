import React from "react";
import { Link } from "react-router-dom";

const JoinComponent = () => {
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
                    <form className="form-signup my-2">
                      <div className="form-label-group  my-4">
                        <input
                          type="text"
                          name="name"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter name"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-4">
                        <input
                          type="number"
                          name="phone"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter phone"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-4">
                        <input
                          type="text"
                          name="id"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter ID"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter password"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control rounded-1 mb-4"
                          placeholder="Confirm password"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-4">
                        <input
                          type="text"
                          name="code"
                          className="form-control rounded-1 mb-4"
                          placeholder="Enter invitation code"
                          required
                        />
                      </div>
                      <div className="form-label-group  my-2">
                        <input
                          type="text"
                          name="wallet"
                          className="form-control rounded-1"
                          placeholder="deposi wallet"
                          required
                        />
                      </div>

                      <div className="text-center d-flex">
                        <Link
                          to="/login"
                          type="submit"
                          className="btn btn-success text-center rounded-1 me-2 form-control text-white my-md-4"
                        >
                          Register <i class="fa fa-paper-plane px-1"></i>
                        </Link>
                        <Link
                          to="/"
                          type="reset"
                          className="btn btn-outline-danger text-center rounded-1 form-control text-white my-md-4"
                        >
                          Cancel <i class="fa fa-trash-o px-1"></i>
                        </Link>
                      </div>
                    </form>

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
