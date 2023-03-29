import React from "react";
import ModelDepositeAdress from "./ModelDepositeAdress";

const DepositeWalletAdress = () => {
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
                      DEPOSIT WALLET ADDRESS
                    </th>
                  </tr>
                  <tr className=" text-start">
                    <td>
                      <span className="text-break ">
                        {" "}
                        Bs3g7s9KKQyJiVWy9guAVfiXQrVK6n7b5botezdMm8xr
                      </span>
                    </td>
                    <th
                      scope="col"
                      className="d-sm-flex justify-content-center"
                    >
                      {/* <button className="btn btn-sm btn-warning text-white">
                        MODIFY
                      </button> */}
                      <ModelDepositeAdress />
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
