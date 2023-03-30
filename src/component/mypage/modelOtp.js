import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../config";
import ModelDepositeAdress from "./ModelDepositeAdress";

const ModalOtp = ({ userInfo: userInfo }) => {
  const [email, setEmail] = useState("");
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();
  const handleSendIOtp = async () => {
    try {
      await API.post(`/api/auth/sendOtp`, {
        email: email,
        type: "changeWalletAddress",
      });
      navigate("/updateWalletAddress");
    } catch (e) {
      console.log("error while getting info");
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-outline-warning text-white"
        data-bs-toggle="modal"
        data-bs-target="#AdressUpdate"
        data-bs-whatever="@mdo"
      >
        <i class="fa fa-edit "></i>
      </button>
      <div
        className="modal fade"
        id="AdressUpdate"
        tabIndex={-1}
        aria-labelledby="UpdateAdressLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-start text-white ">
          <div className="modal-content" style={{ backgroundColor: "#192039" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="UpdateAdressLabel">
                Request Otp
              </h1>
            </div>
            <div className="modal-body">
              <form className="form-signup my-2">
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
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger text-center rounded-1 form-control text-white my-md-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={() => {
                  handleSendIOtp();
                }}
                className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
              >
                Send Otp <i className="fa fa-paper-plane px-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOtp;
