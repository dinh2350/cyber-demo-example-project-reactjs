import React from "react";
import { useDispatch, useSelector } from "react-redux";
function KetQuaTroChoi() {
  const dispatch = useDispatch();
  const { banChon, soBanThang, soBanChoi } = useSelector(
    (state) => state.BaiTapGameXucXacReducer
  );
  const handlePlayGame = () => {
    var number = 0;

    let randomXiNgau = setInterval(() => {
      number += 1;
      dispatch({
        type: "RANDOM_XI_NGAU",
      });

      if (number > 10) {
        //dừng hàm random
        clearInterval(randomXiNgau);
        //random 10 lần gọi hàm tính điểm
        dispatch({
          type: "TINH_DIEM",
        });
      }
    }, 100);
  };

  return (
    <div className="container text-center display-4">
      <div>
        bạn chọn : <span className="text-danger">{banChon}</span>
      </div>
      <div>
        số bàn thắng : <span className="text-success">{soBanThang}</span>
      </div>
      <div>
        tổng số bàn chơi : <span className="text-warning">{soBanChoi}</span>
      </div>

      <button
        onClick={handlePlayGame}
        className="btn btn-success"
        style={{ fontSize: 30 }}
      >
        PLAY GAME
      </button>
    </div>
  );
}

export default KetQuaTroChoi;
