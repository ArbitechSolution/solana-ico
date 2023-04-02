import React, { useEffect, useState } from "react";
import DepositeWalletAdress from "./DepositeWalletAdress";
import ModelInfo from "./ModelInfo";
import PurchaseHistory from "./PurchaseHistory";
import RefrelCashReward from "./RefrelCashReward";
import API from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/auth/actions";
import { CopyToClipboard, onCopy } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";
import jwt from 'jsonwebtoken';
import { formatNumber } from "../../constant"
const MyPageCompnent = () => {
  const [copyTest, setcopyTest] = useState(false);
  const { userData } = useSelector((state) => state.auth);
  // console.log("userData", userData);
  const [userInfo, setUserInfo] = useState([]);
  const [userReward, setUserReward] = useState([]);
  const [userBalance, setUserBalance] = useState([]);
  const [refAddress, setRefAddress] = useState("");
  const dispatch = useDispatch();
  const handleUserInfo = async () => {
    try {
      let tokendata = jwt.decode(localStorage.token);
      let user = await API.post(`/api/auth/getUserInfo/${tokendata.userId}`);
      dispatch(login(user.data.user));
      setUserInfo(user.data.user);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  const handleUserReward = async () => {
    try {
      let tokendata = jwt.decode(localStorage.token);
      let user = await API.post(
        `/user/getReferralRewardSummary/${tokendata.userId}`
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
      let tokendata = jwt.decode(localStorage.token);
      let user = await API.post(
        `/user/getTokenPurchaseSummary/${tokendata.userId}`
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
      let tokendata = jwt.decode(localStorage.token);
      if (tokendata) {
        handleUserInfo();
        handleUserReward();
        handleUserBalance();
      }
    }, 300);
  }, []);
  useEffect(() => {
    let tokendata = jwt.decode(localStorage.token);
    if (tokendata) {
      handleUserInfo();
    }
  }, []);
  const getRef = async () => {
    let tokendata = jwt.decode(localStorage.token);
    let user = await API.post(`/api/auth/getUserInfo/${tokendata.userId}`);
    setRefAddress(`${user.data.user.refCode}`);
  };
  useEffect(() => {
    let tokendata = jwt.decode(localStorage.token);
    if (tokendata) {
      getRef();
    }
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
                      나의 잔고
                    </th>
                  </tr>
                </thead>
                <tbody className="text-start">
                  <tr>
                    <td>전체 보상</td>
                    <td> {userBalance.totalPurchasedToken ? formatNumber(userBalance.totalPurchasedToken) : 0}</td>
                  </tr>
                  <tr>
                    <td>락업 토큰 </td>
                    <td> {userBalance.totalLockupTokens ? formatNumber(userBalance.totalLockupTokens) : 0}</td>
                  </tr>
                  <tr>
                    <td>락업 해제 토큰</td>
                    <td> {userBalance.totalUnLockupQuantity ? formatNumber(userBalance.totalUnLockupQuantity) : 0}</td>
                  </tr>
                  <tr>
                    <td>입금 대기 토큰</td>
                    <td> {userBalance.totalDepositPending ? formatNumber(userBalance.totalDepositPending) : 0} </td>
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
                      나의 캐시 보상
                    </th>
                  </tr>
                </thead>
                <tbody className="text-start">
                  <tr>
                    <td>전체 보상</td>
                    <td> {userReward.totalRewardReceived ? formatNumber(userReward.totalRewardReceived) : 0}</td>
                  </tr>
                  <tr>
                    <td>락업 토큰 </td>
                    <td> {userReward.totalLockupQuantity ? formatNumber(userReward.totalLockupQuantity) : 0}</td>
                  </tr>
                  <tr>
                    <td>락업 해제 토큰 </td>
                    <td> {userReward.totalUnLockupQuantity ? formatNumber(userReward.totalUnLockupQuantity): 0}</td>
                  </tr>
                  <tr>
                    <td>대기 보상 토큰</td>
                    <td> {userReward.totalPendingReward? formatNumber(userReward.totalPendingReward): 0}</td>
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
                      나의 기본 정보
                    </th>
                    <th className="text-center ">
                      <ModelInfo userInfo={userInfo} />
                    </th>
                  </tr>
                </thead>

                <tbody className="text-start">
                  <tr>
                    <td>아이디</td>
                    <td>{userInfo.fullName}</td>
                  </tr>
                  <tr>
                    <td>연락처</td>
                    <td> {userInfo.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>이메일</td>
                    <td>{userInfo.email}</td>
                  </tr>
                  {/* <tr>
                    <td>OTP</td>
                    <td>off</td>
                  </tr> */}
                  <tr>
                    <td>
                      초대링크 :
                    </td>
                    <td>


                      {refAddress}
                      <CopyToClipboard
                        onCopy={() => {
                          setcopyTest(true);
                          toast.info("copied");
                        }}
                        text={refAddress}
                      >
                        <AiOutlineCopy className="text-white fs-4" />
                      </CopyToClipboard>

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
