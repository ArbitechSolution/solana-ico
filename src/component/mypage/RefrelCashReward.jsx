import React from "react";

const RefrelCashReward = () => {
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

                  <tr>
                    <td>Mar 20, 2023 14:00</td>
                    <td>Admiral Yi</td>
                    <td> 50,000,000</td>
                    <td> 5,000</td>
                    <td>DEPOSIT PENDING</td>
                    <td>
                      <button className="btn btn-sm btn-warning disabled text-white">
                        WITHDRAW
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mar 20, 2023 14:00</td>
                    <td>Admiral Yi</td>
                    <td> 50,000,000</td>
                    <td> 5,000</td>
                    <td>LOCKUP</td>
                    <td>
                      <button className="btn btn-sm btn-warning disabled text-white">
                        WITHDRAW
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mar 20, 2023 14:00</td>
                    <td>Admiral Yi</td>
                    <td> 50,000,000</td>
                    <td> 5,000</td>
                    <td>WITHDRAWL AVAILABLE</td>
                    <td>
                      <button className="btn btn-sm btn-warning text-white">
                        WITHDRAW
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mar 20, 2023 14:00</td>
                    <td>Admiral Yi</td>
                    <td> 50,000,000</td>
                    <td> 5,000</td>
                    <td>WITHDRAWL COMPLETE</td>
                    <td>
                      <button className="btn btn-sm btn-warning disabled text-white">
                        WITHDRAW
                      </button>
                    </td>
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

export default RefrelCashReward;
