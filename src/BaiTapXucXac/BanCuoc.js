import React from "react";
import { useDispatch, useSelector } from "react-redux";

function BanCuoc() {
  const dispatch = useDispatch();
  const { mangXucXac } = useSelector((state) => state.BaiTapGameXucXacReducer);
  return (
    <div className="container">
      <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
      <div className="row text-center">
        <div className="col-4">
          <button
            onClick={() => {
              dispatch({
                type: "DAT_CUOC_XUC_XAC",
                banChon: "TÀI",
              });
            }}
            className="bg-danger display-4 p-5 text-light"
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {mangXucXac.map((xucXac, index) => (
              <img
                key={index}
                src={xucXac.hinhAnh}
                width={50}
                height={50}
                alt="hinh"
              />
            ))}
          </div>
        </div>
        <div className="col-4">
          <button
            onClick={() => {
              dispatch({
                type: "DAT_CUOC_XUC_XAC",
                banChon: "XỈU",
              });
            }}
            className="bg-dark display-4 p-5 text-light"
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BanCuoc;
