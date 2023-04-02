import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../config";
import jwt from 'jsonwebtoken';
import { useNavigate } from "react-router-dom"
import { formatNumber } from "../../constant"
const RefrelCashReward = () => {
  const { userData } = useSelector((state) => state.auth);
  const [referralSummary, setReferralSummary] = useState([]);
  const navigate = useNavigate()
  const handlePurchasehistory = async () => {
    try {
      let tokendata = jwt.decode(localStorage.token);
      let user = await API.post(
        `/user/getReferralCashRewards/${tokendata.userId}`
      );
      setReferralSummary(user.data.referralCashRewards);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  const handleWithdraw = (id) => {
    navigate(`/otpforWithdraw/withdrawReward/${id}`);
  };
  useEffect(() => {
    setTimeout(() => {
      let tokendata = jwt.decode(localStorage.token);
      if (tokendata) {
        handlePurchasehistory();
      }
    }, 300);
  }, []);
  return (
    <>
      <div className="row d-flex align-items-center g-lg-5 py-3">
        <div className="col-lg-12 text-sm-start">
          <div className="table-responsive-sm">
            <div style={{ overflowX: "auto" }}>
              <table className="table ScrollTable table-bordered border-secondary text-white">
                <tbody className="text-start">
                  <tr className="text-warning text-center">
                    <th colSpan={6} scope="col" className="display-6 ">
                      초대 캐시 보상
                    </th>
                  </tr>
                  <tr className="text-warning">
                    <th scope="col">일자</th>
                    <th scope="col">구매자</th>
                    <th scope="col">입금(원)</th>
                    <th scope="col">나의 보상</th>
                    <th scope="col">상태</th>
                    <th scope="col">출금</th>
                  </tr>
                  {referralSummary.length > 0 && referralSummary.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{new Date(parseInt(item._id.toString().substring(0, 8), 16) * 1000).toLocaleDateString() + " " + new Date(parseInt(item._id.toString().substring(0, 8), 16) * 1000).toLocaleTimeString()}</td>
                        <td>{item.referredTo.fullName}</td>
                        <td> {formatNumber(item.depositedWon)}</td>
                        <td> {formatNumber(item.myReward)}</td>
                        <td>
                          {item.status == 0
                            ? "입금대기"
                            : item == 1
                              ? "락업기간"
                              : item == 2
                                ? "출금가능"
                                : item == 3
                                  ? "출금대기"
                                  : "출금완료"
                          }
                        </td>
                        <td>
                          <button
                            className={`btn btn-sm btn-warning 
                            ${item.status == 2 ? "" : "disabled"}
                               text-white`}
                            onClick={() => {
                              handleWithdraw(item._id);
                            }}
                          >
                            출금하기
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefrelCashReward;
