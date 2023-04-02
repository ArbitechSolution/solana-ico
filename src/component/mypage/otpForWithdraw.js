import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import API from "../../config";
import {toast} from "react-toastify"
const ModalOtp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {type, id} = useParams();
  const handleSendOtp = async () => {
    try {
      let res =await API.post(`/api/auth/sendOtp`, {
        email: email,
        type: type,
      });
      toast.success(res.data.showableMessage);
      navigate(`/confirmWithdrawOtp/${type}/${id}`);
    } catch (e) {
      toast.error(e.response.data.showableMessage)
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
                    이메일 인증
                    </h5>
                    <div className="form-label-group  my-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-1 mb-4"
                        placeholder="이메일 입력"
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
                        
                        className="btn btn-success text-center rounded-1 form-control text-white my-md-4"
                      >
                        제출 <i className="fa fa-paper-plane px-1"></i>
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
