import React from "react";

const ModelInfo = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-warning text-white"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <i class="fa fa-edit "></i>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-start text-white ">
          <div className="modal-content" style={{ backgroundColor: "#192039" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Info
              </h1>
            </div>
            <div className="modal-body">
              <form className="form-signup my-2">
                <div className="form-label-group  my-4">
                  <input
                    type="text"
                    name="id"
                    className="form-control rounded-1 mb-4"
                    placeholder="ID"
                    required
                  />
                </div>
                <div className="form-label-group  my-4">
                  <input
                    type="number"
                    name="phone"
                    className="form-control rounded-1 mb-4"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="form-label-group  my-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-1 mb-4"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-label-group  my-4">
                  <input
                    type="text"
                    name="code"
                    className="form-control rounded-1 mb-4"
                    placeholder="Otp"
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

export default ModelInfo;
