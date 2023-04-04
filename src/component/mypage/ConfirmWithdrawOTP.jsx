import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../../config";
import { toast } from "react-toastify";
import jwt from 'jsonwebtoken';


const ConfirmWithdrawOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const {type,id} = useParams();
  const handleResetPassword = async () => {
    try {
        let tokendata = jwt.decode(localStorage.token);
        if(type == "withdrawPurchasedToken"){
          await API.post(`/user/withdrawPurchasedToken`, {
            user_id: tokendata.userId,
            purchaseHistoryId:id,
            otp: otp,
          })
            .then((response) => {
              navigate("/mypage");
              toast.success(response.data.showableMessage);
            })
            .catch((error) => {
              console.log(error, "error");
              toast.error(error.response.data.showableMessage);
            });
        }else if(type == "withdrawReward"){
          await API.post(`/user/withdrawReward`, {
            user_id: tokendata.userId,
            referralCashRewardId:id,
            otp: otp,
          })
            .then((response) => {
              console.log("response", response);
              navigate("/mypage");
              toast.success(response.data.showableMessage);
            })
            .catch((error) => {
              console.log(error, "error");
              toast.error(error.response.data.showableMessage);
            });
        }
    } catch (e) {
      toast.error(e.response.data.showableMessage);
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
                    출금 인증
                    </h5>
                    <div className="form-label-group  my-4">
                      <input
                        type="text"
                        name="ref-code"
                        className="form-control rounded-1 mb-4"
                        placeholder="인증코드"
                        required
                        value={otp}
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => {
                          handleResetPassword();
                        }}
                        className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                      >
                        출금하기
                        <i className="fa fa-gears px-1"></i>
                      </button>
                    </div>

                    {/* <small className="text-white ">
                      Don't received an otp?{" "}
                    </small>
                    <Link to="/reset" type="button" className="text-warning">
                      Withdraw
                    </Link> */}
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

export default ConfirmWithdrawOtp;
