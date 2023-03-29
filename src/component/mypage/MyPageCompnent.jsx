import React from "react";
import DepositeWalletAdress from "./DepositeWalletAdress";
import ModelInfo from "./ModelInfo";
import PurchaseHistory from "./PurchaseHistory";
import RefrelCashReward from "./RefrelCashReward";

const MyPageCompnent = () => {
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
                    <td> 10% 보상</td>
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
                    <td>HONG</td>
                    <td rowSpan={4} className="text-center ">
                      <ModelInfo />
                    </td>
                  </tr>
                  <tr>
                    <td>PHONE</td>
                    <td> 010-1234-5678</td>
                  </tr>
                  <tr>
                    <td>EMAIL</td>
                    <td>steve@naver.com</td>
                  </tr>
                  <tr>
                    <td>otp</td>
                    <td>off</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <DepositeWalletAdress />

          <PurchaseHistory />
          <RefrelCashReward />
        </div>
      </div>
      ;
    </div>
  );
};

export default MyPageCompnent;
