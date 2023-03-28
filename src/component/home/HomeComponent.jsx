import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
      <>
        <div>
          <div className="container  py-5">
            <div className="row">
              <div className="col-sm-9 col-md-9 col-lg-10 mx-auto">
                <div className=" text-light card-signin my-5">
                  <div className="card-body bgLogin p-4 ">
                    <h5 className="card-title text-white display-6 text-center my-4 p-md-4">
                      Please fill out the coin application form below.
                    </h5>
                    <form className="form-signin my-2 text-start">
                      <div className="form-label-group">
                        <label for="amount" class="form-label d-flex ">
                          Enter the desired coin purchase amount
                        </label>
                        <input
                          type="text"
                          name="amount"
                          className=" form-control rounded-1 mb-4"
                          placeholder="Enter amount"
                          required
                        />
                      </div>

                      <div className="form-label-group">
                        <label for="code" class="form-label d-flex ">
                          If you have a referral invitation code, please enter
                          it.
                        </label>
                        <input
                          type="text"
                          name="code"
                          className=" form-control rounded-1 mb-4"
                          placeholder="Enter code"
                        />
                      </div>
                      <div className="form-label-group">
                        <label for="Adress" class="form-label d-flex ">
                          Enter the coin address to be paid
                        </label>
                        <input
                          type="text"
                          name="Adress"
                          className=" form-control rounded-1 mb-4"
                          placeholder="Enter Adress"
                        />
                      </div>
                      <div
                        class="alert alert-info alert-dismissible fade show text-start "
                        role="alert"
                      >
                        <span className="small">
                          <strong>Note!</strong> Please check the Solana Chain
                          wallet address for the deposit address. We are not
                          responsible for transfers to incorrectly entered
                          wallet addresses, so please check.If you want to
                          change the deposit address, you can change it on My
                          Page.
                        </span>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>

                      {/* <p class="d-flex  small">
                        <Link class="text-primary  text-left text-dark" of="/">
                          Forgot password?
                        </Link>
                      </p> */}
                      <div className="text-center d-flex">
                        <Link
                          to="/login"
                          type="submit"
                          className="btn btn-success text-center rounded-1 me-2 form-control text-white my-md-4"
                        >
                          Apply <i class="fa fa-paper-plane px-1"></i>
                        </Link>
                        <Link
                          to="/"
                          type="reset"
                          className="btn btn-outline-danger text-danger text-center rounded-1 form-control text-white my-md-4"
                        >
                          Cancel <i class="fa fa-trash-o px-1"></i>
                        </Link>
                      </div>
                    </form>

                    <small className="text-white">
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

export default HomeComponent;
