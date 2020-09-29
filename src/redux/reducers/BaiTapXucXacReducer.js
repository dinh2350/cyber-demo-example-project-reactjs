const stateDefault = {
  dsXucXac: null,
  banChon: "TÀI",
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png", soDiem: 1 },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png", soDiem: 1 },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png", soDiem: 1 },
  ],
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SET_DANH_SACH_XUC_XAC": {
      return { ...state, dsXucXac: [...action.payload] };
    }
    case "DAT_CUOC_XUC_XAC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "RANDOM_XI_NGAU": {
      let mangXiNgau = [];
      for (let i = 0; i < 3; i++) {
        //Tạo ra số ngẫu nhiên từ 0 -> 5
        let soNgauNhien = Math.floor(Math.random() * 6);
        //push vào mangXiNgau 1 xucXac từ dsXucXac (được lấy ra theo thứ tự ngẫu nhiên)
        mangXiNgau.push(state.dsXucXac[soNgauNhien]);
      }
      state.mangXucXac = mangXiNgau;
      return { ...state };
    }
    case "TINH_DIEM": {
      //Tính tổng điểm các quân xúc xắc trong mảng xúc xắc
      let tongDiem = state.mangXucXac.reduce(
        (tongDiem_XiNgau, xiNgau, index) => {
          return (tongDiem_XiNgau += xiNgau.soDiem);
        },
        0
      );

      //Xử lý thắng
      if (
        (tongDiem > 10 && state.banChon === "TÀI") ||
        (tongDiem <= 10 && state.banChon === "XỈU")
      ) {
        state.soBanThang += 1;
      }

      state.soBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGameXucXacReducer;
