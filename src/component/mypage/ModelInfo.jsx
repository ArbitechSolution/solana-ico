import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../config";
import { login } from "../../Redux/auth/actions";
import { toast } from "react-toastify";

const ModelInfo = ({ userInfo: userInfo }) => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleUserUpdate = async () => {
    try {
      let user = await API.post(`/api/auth/updateUserDetails`, {
        user_id: userInfo._id,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
      });
      let userUpdate = await API.post(`/api/auth/getUserInfo/${userData._id}`);
      dispatch(login(userUpdate.data.user));
      toast.success("User info sucessfully updated");
      navigate("/mypage");
    } catch (e) {
      console.log("error while getting info");
    }
  };
  useEffect(() => {
    setFullName(userInfo.fullName);
    setEmail(userInfo.email);
    setPhoneNumber(userInfo.phoneNumber);
  }, [userInfo]);
  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-outline-warning text-white"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <i className="fa fa-edit "></i>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-start text-white ">
          <div className="modal-content" style={{ backgroundColor: "#192039" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Info
              </h1>
            </div>
            <div className="modal-body">
              <div className="form-label-group  my-4">
                <input
                  type="text"
                  name="id"
                  className="form-control rounded-1 mb-4"
                  placeholder="full name"
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
                  placeholder="Phone"
                  required
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <div className="form-label-group  my-4">
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-1 mb-4"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {/* <div className="form-label-group  my-4">
                  <input
                    type="text"
                    name="code"
                    className="form-control rounded-1 mb-4"
                    placeholder="Otp"
                    required
                  />
                </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => {
                  handleUserUpdate();
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

export default ModelInfo;
