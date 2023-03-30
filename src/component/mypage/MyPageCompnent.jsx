import React, { useEffect, useState } from "react";
import DepositeWalletAdress from "./DepositeWalletAdress";
import ModelInfo from "./ModelInfo";
import PurchaseHistory from "./PurchaseHistory";
import RefrelCashReward from "./RefrelCashReward";
import API from "../../config";
import { useSelector } from "react-redux";

const MyPageCompnent = () => {
  const { userData } = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState([]);
  const [userReward, setUserReward] = useState([]);
  const [userBalance, setUserBalance] = useState([]);
  const handleUserInfo = async () => {
    try {
      let user = await API.post(`/api/auth/getUserInfo/${userData.user.id}`);
      setUserInfo(user.data.user);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  const handleUserReward = async () => {
    try {
      let user = await API.post(
        `/user/getReferralRewardSummary/${userData.user.id}`
      );
      setUserReward(user.data.rewardSummary);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  const handleUserBalance = async () => {
    try {
      let user = await API.post(
        `/user/getReferralRewardSummary/${userData.user.id}`
      );
      setUserReward(user.data.rewardSummary);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      handleUserInfo();
      handleUserReward();
    }, 300);
  }, []);
  return (
    <div>
      <div>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row d-flex align-items-center g-lg-5 py-3">
            <div
              className="col-lg-6  text-center"
              style={{ overflowX: "auto" }}
            >
              <table className="table table-bordered border-secondary text-white">
                <thead className="text-warning">
                  <tr>
                    <th scope="col" colSpan="2" className="display-6 ">
                      MY BALANCE
                    </th>
                  </tr>
                </thead>
                <tbody className="text-start">
                  <tr>
                    <td>token purchase amount(won)</td>
                    <td> 1,000,000</td>
                  </tr>
                  <tr>
                    <td>token quantity</td>
                    <td> 5,000</td>
                  </tr>
                  <tr>
                    <td>lock up quantity</td>
                    <td> 1,000</td>
                  </tr>
                  <tr>
                    <td>unlock up quantity</td>
                    <td> 4,000 </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="col-lg-6  text-center"
              style={{ overflowX: "auto" }}
            >
              <table className="table table-bordered border-secondary text-white">
                <thead className="text-warning">
                  <tr>
                    <th scope="col" colSpan="2" className="display-6 ">
                      MY REWARD
                    </th>
                  </tr>
                </thead>
                <tbody className="text-start">
                  <tr>
                    <td>referral cash reward</td>
                    <td> {userReward.totalRewardReceived}</td>
                  </tr>
                  <tr>
                    <td>token quantity</td>
                    <td> 5,000,000</td>
                  </tr>
                  <tr>
                    <td>lock up quantity</td>
                    <td> 1,000,000</td>
                  </tr>
                  <tr>
                    <td>unlock up quantity</td>
                    <td> 4,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row d-flex align-items-center g-lg-5 py-3">
            <div
              className="col-lg-12 text-center"
              style={{ overflowX: "auto" }}
            >
              <table className="table table-bordered  border-secondary text-white">
                <thead className="text-warning ">
                  <tr>
                    <th colSpan={3} scope="col" className="display-6">
                      MY BASIC INFORMATION
                    </th>
                  </tr>
                </thead>

                <tbody className="text-start">
                  <tr>
                    <td>ID</td>
                    <td>{userInfo._id}</td>
                    <td rowSpan={4} className="text-center ">
                      <ModelInfo />
                    </td>
                  </tr>
                  <tr>
                    <td>PHONE</td>
                    <td> {userInfo.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>EMAIL</td>
                    <td>{userInfo.email}</td>
                  </tr>
                  <tr>
                    <td>otp</td>
                    <td>off</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <DepositeWalletAdress userInfo={userInfo} />

          <PurchaseHistory />
          <RefrelCashReward />
        </div>
      </div>
      ;
    </div>
  );
};

export default MyPageCompnent;
