import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../config";

const PurchaseHistory = () => {
  const { userData } = useSelector((state) => state.auth);
  const [purchaseHistory, setPurchasehistory] = useState([]);
  const navigate = useNavigate();
  const handlePurchasehistory = async () => {
    try {
      let user = await API.post(
        `/user/getUserPurchaseHistory/${userData.user.id}`
      );
      setPurchasehistory(user.data.userPurchaseHistory);
    } catch (e) {
      console.log("error while getting info");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      handlePurchasehistory();
    }, 300);
  }, []);
  const handleWithdraw = (index) => {
    navigate("/otpforWithdraw");
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
                      PURCHASE HISTORY
                    </th>
                  </tr>
                  <tr className="text-warning">
                    <th scope="col">DATE</th>
                    <th scope="col">DEPOSIT(WON)</th>
                    <th scope="col">COIN AMOUNT</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">WITHDRAW</th>
                  </tr>
                  {purchaseHistory.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>Mar 20, 2023 14:00</td>
                        <td> {item.depositedWon}</td>
                        <td> {item.coinAmount}</td>
                        <td>
                          {item.status == 0
                            ? "Deposit Pending"
                            : item.status == 1
                            ? "lockedUp"
                            : item.status == 2
                            ? "Withdraw Available"
                            : item.status == 3
                            ? "Withdraw Pending"
                            : "Withdraw Compelete"}
                        </td>
                        <td>
                          <button
                            className={`btn btn-sm btn-warning ${
                              item.status != 2 ? "" : "disabled"
                            } text-white`}
                            onClick={() => {
                              handleWithdraw();
                            }}
                          >
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

export default PurchaseHistory;
