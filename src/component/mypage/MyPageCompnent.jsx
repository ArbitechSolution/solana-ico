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
      ).then((response) => {
        if (response.status == 200) {
          setUserReward(response.data.rewardSummary);
        } else {
          setUserReward([]);
        }
      });
    } catch (e) {
      console.log("error while getting info");
    }
  };
  const handleUserBalance = async () => {
    try {
      let user = await API.post(
        `/user/getTokenPurchaseSummary/${userData.user.id}`
      )
        .then((response) => {
          if (response.status == 200) {
            setUserBalance(response.data);
          } else if (response.status == 401) {
            setUserBalance([]);
          } else {
            setUserBalance([]);
          }
        })
        .catch((error) => {
          console.log(error, "error of getting");
          setUserBalance([]);
        });
    } catch (e) {
      console.log("error while getting balance");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      handleUserInfo();
      handleUserReward();
      handleUserBalance();
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
                    <td>Total Purchased Token</td>
                    <td> {userBalance.totalPurchasedToken || 0}</td>
                  </tr>
                  <tr>
                    <td>Total UnLockup Tokens</td>
                    <td> {userBalance.totalUnLockupTokens || 0}</td>
                  </tr>
                  <tr>
                    <td>Available To Withdraw</td>
                    <td> {userBalance.availableToWithdraw || 0}</td>
                  </tr>
                  <tr>
                    <td>Total Deposit Pending</td>
                    <td> {userBalance.totalDepositPending || 0} </td>
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
                    <td>Total Pending Reward</td>
                    <td> {userReward.totalPendingReward}</td>
                  </tr>
                  <tr>
                    <td>Total UnLockup Quantity</td>
                    <td> {userReward.totalUnLockupQuantity}</td>
                  </tr>
                  <tr>
                    <td>Available Reward</td>
                    <td> {userReward.availableReward}</td>
                  </tr>
                  <tr>
                    <td>Total Reward Received</td>
                    <td> {userReward.totalRewardReceived}</td>
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
                    <th colSpan={1} scope="col" className="display-6">
                      MY BASIC INFORMATION
                    </th>
                    <th className="text-center ">
                      <ModelInfo userInfo={userInfo} />
                    </th>
                  </tr>
                </thead>

                <tbody className="text-start">
                  <tr>
                    <td>ID</td>
                    <td>{userInfo._id}</td>
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
                  <tr>
                    <td colSpan={2}>
                      Referral Link :
                      Bs3g7s9KKQyJiVWy9guAVfiXQrVK6n7b5botezdMm8xr
                      <span className="px-2">
                        <a className="btn btn-sm text-white btn-outline-warning">
                          <i class="fa fa-clone"></i>
                        </a>
                      </span>
                    </td>
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
