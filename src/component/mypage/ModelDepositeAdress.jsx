import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../config";

const ModelDepositeAdress = () => {
  const { userData } = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const [walletAddressTochange, setWalletAddress] = useState("");
  const [resCode, setResetCode] = useState("");
  const handleWalletUpdate = async () => {
    try {
      let user = await API.post(`/api/auth/updateWalletAddress`, {
        user_id: userInfo._id,
        walletAddress: walletAddressTochange,
        resetCode: resCode,
      });
      navigate("/mypage");
    } catch (e) {
      console.log("error while getting info");
    }
  };
  const close = () => {
    navigate("/mypage");
  };
  const handleUserInfo = async () => {
    try {
      let user = await API.post(`/api/auth/getUserInfo/${userData.user.id}`);
      setUserInfo(user.data.user);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  useEffect(() => {
    handleUserInfo();
  }, [userData]);

  // updateWalletAddress
  return (
    <div>
      <div className="container">
        <div className="modal-dialog text-start text-white w-50">
          <div className="modal-content" style={{ backgroundColor: "#192039" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="UpdateAdressLabel">
                Update Adress
              </h1>
            </div>
            <div className="modal-body">
              <form className="form-signup my-2">
                <div className="form-label-group  my-4">
                  <input
                    type="text"
                    name="Adress"
                    className="form-control rounded-1 mb-4"
                    placeholder="Deposite Address"
                    required
                    value={walletAddressTochange}
                    onChange={(e) => {
                      setWalletAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="form-label-group  my-4">
                  <input
                    type="text"
                    name="Adress"
                    className="form-control rounded-1 mb-4"
                    placeholder="OTP "
                    required
                    value={resCode}
                    onChange={(e) => {
                      setResetCode(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger w-25"
                data-bs-dismiss="modal"
                onClick={() => {
                  close();
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success w-25"
                onClick={() => {
                  handleWalletUpdate();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDepositeAdress;
