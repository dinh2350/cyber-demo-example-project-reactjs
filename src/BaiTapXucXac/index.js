import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BanCuoc from "./BanCuoc";
import KetQuaTroChoi from "./KetQuaTroChoi";
import "./BaiTapXucXac.scss";
import data from "./mangXucXac.json";
function BaiTapXucXac() {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch({
      type: "SET_DANH_SACH_XUC_XAC",
      payload: data,
    });
  }, []);

  return (
    <div>
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <BanCuoc />
        <KetQuaTroChoi />
      </div>
    </div>
  );
}

export default BaiTapXucXac;
