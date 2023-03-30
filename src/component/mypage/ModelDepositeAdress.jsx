import React from "react";

const ModelDepositeAdress = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-outline-warning text-white"
        data-bs-toggle="modal"
        data-bs-target="#AdressUpdate"
        data-bs-whatever="@mdo"
      >
        <i class="fa fa-edit "></i>
      </button>
      <div
        className="modal fade"
        id="AdressUpdate"
        tabIndex={-1}
        aria-labelledby="UpdateAdressLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-start text-white ">
          <div className="modal-content" style={{ backgroundColor: "#192039" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="UpdateAdressLabel">
                Update Adress
              </h1>
            </div>
            <div className="modal-body">
              <form className="form-signup my-2">
                <div className="form-label-group  my-4">
                  <input
                    type="text"
                    name="Adress"
                    className="form-control rounded-1 mb-4"
                    placeholder="Deposite Adress"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDepositeAdress;
