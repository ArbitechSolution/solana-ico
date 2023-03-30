import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../config";

const RefrelCashReward = () => {
  const { userData } = useSelector((state) => state.auth);
  const [referralSummary, setReferralSummary] = useState([]);
  const handlePurchasehistory = async () => {
    try {
      let user = await API.post(
        `/user/getReferralCashRewards/${userData.user.id}`
      );
      console.log("user", user);
      setReferralSummary(user.data.referralCashRewards);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      handlePurchasehistory();
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
                      Referral Cash Reward
                    </th>
                  </tr>
                  <tr className="text-warning">
                    <th scope="col">DATE</th>
                    <th scope="col">PURCHASER</th>
                    <th scope="col">DEPOSIT(WON)</th>
                    <th scope="col">My REWARD</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">WITHDRAW</th>
                  </tr>
                  {referralSummary.map((item, key) => {
                    return (
                      <tr>
                        <td>Mar 20, 2023 14:00</td>
                        <td>{item.referredTo.fullName}</td>
                        <td> {item.depositedWon}</td>
                        <td> {item.myReward}</td>
                        <td>
                          {item.status == 0
                            ? "pending"
                            : item.status == 1
                            ? "locked"
                            : "withdrawAvailable"}
                        </td>
                        <td>
                          <button className="btn btn-sm btn-warning disabled text-white">
                            WITHDRAW
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
