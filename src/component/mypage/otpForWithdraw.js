import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../config";

const ModalOtp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSendOtp = async () => {
    try {
      await API.post(`/api/auth/sendOtp`, {
        email: email,
        type: "withdrawPurchasedToken",
      });
      navigate("/purchase");
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
                      Request Otp
                    </h5>
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
                        onClick={() => {
                          handleSendOtp();
                        }}
                        to="/confirmpassword"
                        className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                      >
                        Send Otp <i className="fa fa-paper-plane px-1"></i>
                      </Link>
                    </div>
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

export default ModalOtp;
