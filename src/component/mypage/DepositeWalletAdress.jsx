import React from "react";
import ModelDepositeAdress from "./ModelDepositeAdress";
import ModalOtp from "./modelOtp";

const DepositeWalletAdress = ({ userInfo: userInfo }) => {
  return (
    <>
      <div className="row d-flex text-center align-items-center g-lg-5 py-3">
        <div className="col-lg-12 text-sm-center">
          <div className="table-responsive-sm">
            <div style={{ overflowX: "auto" }}>
              <table className="table table-bordered border-secondary text-white">
                <tbody>
                  <tr className="text-warning">
                    <th colSpan={2} scope="col" className="display-6 ">
                    입금 지갑
                    </th>
                  </tr>
                  <tr className=" text-start">
                    <td>
                      <span className="text-break ">
                        {userInfo.walletAddress}
                      </span>
                    </td>
                    <th
                      scope="col"
                      className="d-sm-flex justify-content-center"
                    >
                      <ModalOtp userInfo={userInfo} />
                      {/* <ModelDepositeAdress userInfo={userInfo} /> */}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositeWalletAdress;
