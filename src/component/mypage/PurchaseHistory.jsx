import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../config";
import ModalOtp from "./otpForWithdraw";
import jwt from 'jsonwebtoken';
import {formatNumber} from "../../constant"
const PurchaseHistory = () => {
  const { userData } = useSelector((state) => state.auth);
  const [purchaseHistory, setPurchasehistory] = useState([]);
  const navigate = useNavigate();
  const handlePurchasehistory = async () => {
    try {
      let tokendata = jwt.decode(localStorage.token);
      let user = await API.post(
        `/user/getUserPurchaseHistory/${tokendata.userId}`
      );
      setPurchasehistory(user.data.userPurchaseHistory);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      let tokendata = jwt.decode(localStorage.token);
    if (tokendata) {
      handlePurchasehistory();
    }
    }, 300);
  }, []);
  const handleWithdraw = (id) => {
    navigate(`/otpforWithdraw/withdrawPurchasedToken/${id}`);
  };
  return (
    <>
      <div className="row d-flex text-center align-items-center  g-lg-5 py-3">
        <div className="col-lg-12 text-sm-center">
          <div className="table-responsive-sm">
            <div style={{ overflowX: "auto" }}>
              <table className="table ScrollTable table-bordered border-secondary text-white">
                <tbody className="text-start">
                  <tr className="text-warning text-center">
                    <th colSpan={5} scope="col" className="display-6 ">
                    구매내역
                    </th>
                  </tr>
                  <tr className="text-warning">
                    <th scope="col">일자</th>
                    <th scope="col">입금(원)</th>
                    <th scope="col">코인수량</th>
                    <th scope="col">상태</th>
                    <th scope="col">출금</th>
                  </tr>
                  {purchaseHistory.length >0 && purchaseHistory.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{new Date( parseInt( item._id.toString().substring(0,8), 16 ) * 1000 ).toLocaleDateString() + " " + new Date( parseInt( item._id.toString().substring(0,8), 16 ) * 1000 ).toLocaleTimeString()}</td>
                        <td> {formatNumber(item.depositedWon)}</td>
                        <td> {formatNumber(item.coinAmount)}</td>
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
                          disabled={item.status != 2 ? true : false}
                            className={`btn btn-sm btn-warning text-white`}
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

export default PurchaseHistory;
