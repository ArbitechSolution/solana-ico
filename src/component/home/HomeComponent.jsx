import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import won from "../../assets/imges/won.png";
import API from "../../config";
import { useParams } from "react-router-dom";
import jwt from 'jsonwebtoken';
import { toast } from "react-toastify";
import { resolveAfterGiven } from "../../constant"
import {formatNumber} from '../../constant'
const HomeComponent = () => {
  const { userData } = useSelector((state) => state.auth);
  const [amount, setAmount] = useState();
  const [refCode, setrefCode] = useState();
  const [cal, setCal] = useState();


  const handlePurchase = async () => {
    try {
      if (localStorage.token) {
        if (amount != null && amount != undefined && amount != ""
        ) {
          let tokendata = jwt.decode(localStorage.token);
          let { data: { user } } = await API.post(`/api/auth/getUserInfo/${tokendata.userId}`);
          if (refCode != user.refCode) {
            let user = await API.post(`/user/buyToken`, {
              amountsOfWon: amount,
              refCode: refCode,
              user_id: tokendata.userId,
            }).then((response) => {
              setAmount("");
              setrefCode("");
              toast.success(response.data.showableMessage)
            });
          } else {
            toast.error("본인 초대 코드를 입력은 보상에서 제외됩니다")
          }
        } else {
          toast.info("모든 영역이 필요합니다.")
        }
      } else {
        toast.info("먼저 로그인을 해주세요.")
        await resolveAfterGiven(2000)
        window.location.href = "/login";
      }
    } catch (e) {
      toast.error(e.response.data.showableMessage)
      console.log("error while getting info", e);
    }
  };
  const handleUpdatePrice = async (value) => {
    setAmount(value);
    await API.post(`/user/getPrice`).then((response) => {
      let res = parseFloat(value / response.data.price);
      setCal(formatNumber(res));
    });
  };
  return (
    <div>
      <>
        <div>
          <div className="container  py-5">
            <div className="row">
              <div className="col-sm-9 col-md-9 col-lg-10 mx-auto">
                <div className=" text-light card-signin my-5">
                  <div className="card-body bgLogin p-4 ">
                    <h5 className="card-title text-white display-6 text-center my-4 p-md-4">
                      아래 코인 신청 양식을 입력해 주시기 바랍니다.
                    </h5>
                    <div className="form-label-group">
                      <label for="amount" className="form-label d-flex ">
                        원하는 코인 구매 금액을 입력해주세요
                      </label>
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text bg-secondary"
                          id="basic-addon1"
                        >
                          <img
                            className="img-fluid"
                            alt="won"
                            src={won}
                            width={"20px"}
                          />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="금액을 입력하세요"
                          aria-label="Enteramount"
                          aria-describedby="basic-addon1"
                          value={amount}
                          onChange={(e) => {
                            handleUpdatePrice(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-label-group">
                      <label for="Adress" className="form-label d-flex ">
                        예상 지급 코인 수량
                      </label>
                      <input
                        type="text"
                        name="수량 입력"
                        className=" form-control rounded-1 mb-4"
                        placeholder="00000"
                        readOnly
                        value={cal}
                      />
                    </div>
                    <div className="form-label-group">
                      <label for="code" className="form-label d-flex ">
                        추천인 초대코드가 있으면 입력해주세요
                      </label>
                      <input
                        type="text"
                        name="code"
                        className=" form-control rounded-1 mb-4"
                        placeholder="코드입력"
                        value={refCode}
                        onChange={(e) => {
                          setrefCode(e.target.value);
                        }}
                      />
                    </div>


                    <div className="text-center d-flex">
                      <Link
                        className="btn btn-success text-center rounded-1 me-2 form-control text-white my-md-4"
                        onClick={() => {
                          handlePurchase();
                        }}
                      >
                        제출 <i className="fa fa-paper-plane px-1"></i>
                      </Link>
                      <Link
                        to="/"
                        type="reset"
                        className="btn btn-outline-danger text-danger text-center rounded-1 form-control text-white my-md-4"
                      >
                        취소 <i className="fa fa-trash-o px-1"></i>
                      </Link>
                    </div>

                    <small className="text-white">
                      계정이 없습니다?{" "}
                    </small>
                    <Link to="/join" type="submit" className="text-warning">
                    신규가입
                    </Link>
                    <div
                      className="alert alert-info alert-dismissible fade show text-start mt-2"
                      role="alert"
                    >

                      <span className="small">
                        <strong>[안내사항]!</strong>
                        <p> - 구매자는 보유코인을 마이페이지에서 확인하고 구매확정 버튼을 눌러서 코인 출금을 활성화할수 있습니다 </p>
                        <p> - 구매확정을 완료한 후에, 14일 락업 기간 경과후에 코인 출금이 가능합니다</p>
                        <p> - 추천인은 구매자가 코인 구매시 추천인 코드 입력에 따른  구매액의 10%를 동일한 코인을 캐시 형태로 보상 받습니다</p>
                        <p> - 추천인도 마이페이지에서 구매자가 구매확정 완료 시점 이후 14일 지나서 출금이 동일하게 가능합니다.</p>
                        <p> - 코인 시세는 일정할인율이 적용되며, 코인마켓캡 기준 실시간 기준으로 계산됩니다</p>
                        <p> - 신청 양식 작성후 아래와 같은 단계로 진행되며, 마이페이지 현황에서 확인 가능합니다</p>
                        <p>  1)입금대기 : 신청서 작성시 맨처음 보여지는 마이페이지에서 보여지는 단계</p>
                        <p>  2)락업기간 : 관리자가 출금을 확인하고 입금완료로 변경시 보이는 화면</p>
                        <p>  3)출금가능 : 락업기간 해제이후(14일) 자동으로 출금 가능으로 변경되는 화면,출금버튼이 생성됨</p>
                        <p>  4)출금완료 : 관리자가 코인을 전송한후 보여지는 화면</p>
                        <p>  * 추천인 캐시 보상도 동일하게 마이페이지에서 구매자가 출금 가능후 가능합니다</p>
                        <p> - 출금신청 및 지갑 주소 변경시 이메일 코드 인증은 필수입니다</p>
                      </span>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HomeComponent;
